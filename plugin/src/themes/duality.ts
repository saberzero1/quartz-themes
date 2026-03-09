import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "duality",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-active-hover: rgba(255, 255, 255, 0.1);
  --background-modifier-border: #4a2c2a;
  --background-modifier-border-focus: #663b38;
  --background-modifier-border-hover: #663b38;
  --background-modifier-hover: rgba(255, 255, 255, 0.05);
  --background-primary: #1c1c1c;
  --background-primary-alt: #2a2a2a;
  --background-secondary: #151515;
  --background-secondary-alt: #151515;
  --bases-cards-background: #1c1c1c;
  --bases-cards-cover-background: #2a2a2a;
  --bases-cards-shadow: 0 0 0 1px #4a2c2a;
  --bases-cards-shadow-hover: 0 0 0 1px #663b38;
  --bases-embed-border-color: #4a2c2a;
  --bases-group-heading-property-color: #b0a38c;
  --bases-table-border-color: #4a2c2a;
  --bases-table-cell-background-active: #1c1c1c;
  --bases-table-cell-background-disabled: #2a2a2a;
  --bases-table-cell-shadow-active: 0 0 0 2px #663b38;
  --bases-table-group-background: #2a2a2a;
  --bases-table-header-background: #1c1c1c;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.05);
  --bases-table-header-color: #b0a38c;
  --bases-table-summary-background: #1c1c1c;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.05);
  --button-radius: 6px;
  --callout-background: #2a2a2a;
  --callout-border-color: #4a2c2a;
  --callout-content-background: #2a2a2a;
  --callout-title-color: #ff4500;
  --canvas-background: #1c1c1c;
  --canvas-card-label-color: #8c816d;
  --caret-color: #d4c9b5;
  --checkbox-border-color: #8c816d;
  --checkbox-border-color-hover: #b0a38c;
  --checkbox-marker-color: #1c1c1c;
  --checklist-done-color: #b0a38c;
  --code-background: #2a2a2a;
  --code-border-color: #4a2c2a;
  --code-bracket-background: rgba(255, 255, 255, 0.05);
  --code-comment: #8c816d;
  --code-keyword: #ff4500;
  --code-normal: #d4c9b5;
  --code-punctuation: #b0a38c;
  --code-string: #b0a38c;
  --collapse-icon-color: #8c816d;
  --collapse-icon-color-collapsed: #ff4500;
  --dialog-max-height: 75vh;
  --dialog-max-width: 90vw;
  --dialog-width: 500px;
  --divider-color: #4a2c2a;
  --divider-color-hover: #663b38;
  --embed-block-shadow-hover: 0 0 0 1px #4a2c2a, inset 0 0 0 1px #4a2c2a;
  --file-header-background: #1c1c1c;
  --file-header-background-focused: #1c1c1c;
  --file-header-font: '??', "Times New Roman", Times, serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-color: #d4c9b5;
  --font-interface: '??', "Times New Roman", Times, serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Times New Roman", Times, serif;
  --font-mermaid: '??', "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "Courier New", Courier, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "Courier New", Courier, monospace;
  --font-print: '??', '??', "Times New Roman", Times, serif, 'Arial';
  --font-text: '??', "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Times New Roman", Times, serif;
  --footnote-divider-color: #4a2c2a;
  --footnote-id-color: #b0a38c;
  --footnote-id-color-no-occurrences: #8c816d;
  --footnote-input-background-active: rgba(255, 255, 255, 0.05);
  --graph-node: #b0a38c;
  --graph-node-focused: #ff4500;
  --graph-node-unresolved: #8c816d;
  --graph-text: #d4c9b5;
  --h1-color: #ff4500;
  --h1-size: 2em;
  --h2-color: #ff4500;
  --h2-size: 1.6em;
  --h3-color: #d4c9b5;
  --h3-size: 1.4em;
  --h4-color: #d4c9b5;
  --h4-size: 1.2em;
  --h5-color: #b0a38c;
  --h5-size: 1em;
  --h6-color: #b0a38c;
  --h6-size: 0.9em;
  --heading-formatting: #8c816d;
  --hr-color: #4a2c2a;
  --icon-color: #b0a38c;
  --icon-color-active: #ff4500;
  --icon-color-focused: #d4c9b5;
  --icon-color-hover: #b0a38c;
  --inline-title-color: #ff4500;
  --inline-title-size: 2em;
  --input-date-separator: #8c816d;
  --input-placeholder-color: #8c816d;
  --link-color: #ff4500;
  --link-color-hover: #ff6347;
  --link-decoration: none;
  --link-external-color: #ff4500;
  --link-external-color-hover: #ff6347;
  --link-unresolved-color: #ff6666;
  --link-unresolved-decoration-color: #ff6666;
  --link-unresolved-decoration-style: dashed;
  --list-marker-color: #8c816d;
  --list-marker-color-collapsed: #ff4500;
  --list-marker-color-hover: #b0a38c;
  --menu-background: #151515;
  --menu-border-color: #663b38;
  --metadata-border-color: #4a2c2a;
  --metadata-divider-color: #4a2c2a;
  --metadata-input-background-active: rgba(255, 255, 255, 0.05);
  --metadata-input-font: '??', "Times New Roman", Times, serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #d4c9b5;
  --metadata-label-background-active: rgba(255, 255, 255, 0.05);
  --metadata-label-font: '??', "Times New Roman", Times, serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #b0a38c;
  --metadata-label-text-color-hover: #b0a38c;
  --metadata-property-background-active: rgba(255, 255, 255, 0.05);
  --metadata-property-box-shadow-focus: 0 0 0 2px #663b38;
  --metadata-property-box-shadow-hover: 0 0 0 1px #663b38;
  --modal-background: #2a2a2a;
  --modal-border-color: #4a2c2a;
  --modal-height: 80vh;
  --modal-radius: 6px;
  --nav-collapse-icon-color: #b0a38c;
  --nav-collapse-icon-color-collapsed: #8c816d;
  --nav-heading-color: #d4c9b5;
  --nav-heading-color-collapsed: #8c816d;
  --nav-heading-color-collapsed-hover: #b0a38c;
  --nav-heading-color-hover: #d4c9b5;
  --nav-item-background-active: rgba(255, 255, 255, 0.1);
  --nav-item-background-hover: rgba(255, 255, 255, 0.05);
  --nav-item-color: #d4c9b5;
  --nav-item-color-active: #ff4500;
  --nav-item-color-highlighted: #ff4500;
  --nav-item-color-hover: #ff4500;
  --nav-item-color-selected: #d4c9b5;
  --nav-tag-color: #8c816d;
  --nav-tag-color-active: #b0a38c;
  --nav-tag-color-hover: #b0a38c;
  --pdf-background: #1c1c1c;
  --pdf-page-background: #1c1c1c;
  --pdf-shadow: 0 0 0 1px #4a2c2a;
  --pdf-sidebar-background: #1c1c1c;
  --pdf-thumbnail-shadow: 0 0 0 1px #4a2c2a;
  --pill-border-color: #4a2c2a;
  --pill-border-color-hover: #663b38;
  --pill-color: #b0a38c;
  --pill-color-hover: #d4c9b5;
  --pill-color-remove: #8c816d;
  --pill-color-remove-hover: #ff4500;
  --prompt-background: #1c1c1c;
  --ribbon-background: #151515;
  --ribbon-background-collapsed: #151515;
  --scrollbar-active-thumb-bg: #663b38;
  --scrollbar-bg: #151515;
  --scrollbar-thumb-bg: #4a2c2a;
  --search-clear-button-color: #b0a38c;
  --search-icon-color: #b0a38c;
  --search-result-background: #1c1c1c;
  --setting-group-heading-color: #d4c9b5;
  --setting-items-background: #2a2a2a;
  --setting-items-border-color: #4a2c2a;
  --slider-thumb-border-color: #663b38;
  --slider-track-background: #4a2c2a;
  --status-bar-background: #151515;
  --status-bar-border-color: #4a2c2a;
  --status-bar-text-color: #d4c9b5;
  --suggestion-background: #1c1c1c;
  --tab-background-active: #1c1c1c;
  --tab-container-background: #151515;
  --tab-divider-color: #4a2c2a;
  --tab-outline-color: #4a2c2a;
  --tab-radius: 6px;
  --tab-radius-active: 6px;
  --tab-switcher-background: #151515;
  --tab-switcher-menubar-background: linear-gradient(to top, #151515, transparent);
  --tab-text-color: #d4c9b5;
  --tab-text-color-active: #ff4500;
  --tab-text-color-focused: #d4c9b5;
  --tab-text-color-focused-active: #ff4500;
  --tab-text-color-focused-active-current: #d4c9b5;
  --tab-text-color-focused-highlighted: #ff4500;
  --table-add-button-border-color: #4a2c2a;
  --table-border-color: #4a2c2a;
  --table-drag-handle-color: #8c816d;
  --table-drag-handle-color-active: #000000;
  --table-header-border-color: #4a2c2a;
  --table-header-color: #d4c9b5;
  --tag-color: #ff4500;
  --tag-color-hover: #ff4500;
  --text-accent: #ff4500;
  --text-accent-hover: #ff6347;
  --text-faint: #8c816d;
  --text-highlight-bg: rgba(255, 69, 0, 0.9);
  --text-muted: #b0a38c;
  --text-normal: #d4c9b5;
  --text-on-accent: #000000;
  --text-selection: rgba(255, 69, 0, 0.3);
  --titlebar-background: #151515;
  --titlebar-background-focused: #151515;
  --titlebar-border-color: #4a2c2a;
  --titlebar-text-color: #b0a38c;
  --titlebar-text-color-focused: #d4c9b5;
  --vault-profile-color: #d4c9b5;
  --vault-profile-color-hover: #d4c9b5;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(21, 21, 21);
  color: rgb(212, 201, 181);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(28, 28, 28);
  color: rgb(212, 201, 181);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(21, 21, 21);
  color: rgb(212, 201, 181);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(74, 44, 42);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(21, 21, 21);
  border-left-color: rgb(74, 44, 42);
  color: rgb(212, 201, 181);
}

body div#quartz-root {
  background-color: rgb(28, 28, 28);
  color: rgb(212, 201, 181);
}`,
    typography: `body .page article p > b, b {
  color: rgb(212, 201, 181);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(212, 201, 181) none 0px;
  text-decoration: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

body .page article p > em, em {
  color: rgb(212, 201, 181);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(212, 201, 181) none 0px;
  text-decoration: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

body .page article p > i, i {
  color: rgb(212, 201, 181);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(212, 201, 181) none 0px;
  text-decoration: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

body .page article p > strong, strong {
  color: rgb(212, 201, 181);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(212, 201, 181) none 0px;
  text-decoration: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

body .text-highlight {
  background-color: rgba(255, 69, 0, 0.9);
  color: rgb(212, 201, 181);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(212, 201, 181) none 0px;
  text-decoration: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

body del {
  color: rgb(212, 201, 181);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(212, 201, 181) none 0px;
  text-decoration: line-through rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

body p {
  color: rgb(176, 163, 140);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(176, 163, 140) none 0px;
  text-decoration: rgb(176, 163, 140);
  text-decoration-color: rgb(176, 163, 140);
}`,
    links: `body a.external, footer a {
  color: rgb(255, 69, 0);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 69, 0) none 0px;
  text-decoration: underline rgb(255, 69, 0);
  text-decoration-color: rgb(255, 69, 0);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 69, 0);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 69, 0) none 0px;
  text-decoration: rgb(255, 69, 0);
  text-decoration-color: rgb(255, 69, 0);
}

body a.internal.broken {
  color: rgb(255, 102, 102);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 102, 102) none 0px;
  text-decoration: dashed rgb(255, 102, 102);
  text-decoration-color: rgb(255, 102, 102);
  text-decoration-style: dashed;
}`,
    lists: `body dd {
  color: rgb(212, 201, 181);
}

body dt {
  color: rgb(212, 201, 181);
}

body ol > li {
  color: rgb(212, 201, 181);
}

body ol.overflow {
  background-color: rgb(28, 28, 28);
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
}

body ul > li {
  color: rgb(212, 201, 181);
}

body ul.overflow {
  background-color: rgb(28, 28, 28);
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(140, 129, 109);
  text-decoration: rgb(140, 129, 109);
}

body blockquote {
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
}

body table {
  color: rgb(212, 201, 181);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 180.766px;
}

body td {
  border-bottom-color: rgb(74, 44, 42);
  border-left-color: rgb(74, 44, 42);
  border-right-color: rgb(74, 44, 42);
  border-top-color: rgb(74, 44, 42);
  color: rgb(212, 201, 181);
}

body th {
  border-bottom-color: rgb(74, 44, 42);
  border-left-color: rgb(74, 44, 42);
  border-right-color: rgb(74, 44, 42);
  border-top-color: rgb(74, 44, 42);
  color: rgb(212, 201, 181);
}`,
    code: `body code {
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
  color: rgb(212, 201, 181);
  font-family: "??", "Courier New", Courier, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(42, 42, 42);
  border-bottom-color: rgb(74, 44, 42);
  border-left-color: rgb(74, 44, 42);
  border-right-color: rgb(74, 44, 42);
  border-top-color: rgb(74, 44, 42);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(42, 42, 42);
  border-bottom-color: rgb(74, 44, 42);
  border-left-color: rgb(74, 44, 42);
  border-right-color: rgb(74, 44, 42);
  border-top-color: rgb(74, 44, 42);
  color: rgb(212, 201, 181);
}

body pre > code, pre:has(> code) {
  background-color: rgb(42, 42, 42);
  border-bottom-color: rgb(74, 44, 42);
  border-left-color: rgb(74, 44, 42);
  border-right-color: rgb(74, 44, 42);
  border-top-color: rgb(74, 44, 42);
}

body pre:has(> code) {
  background-color: rgb(42, 42, 42);
  border-bottom-color: rgb(74, 44, 42);
  border-left-color: rgb(74, 44, 42);
  border-right-color: rgb(74, 44, 42);
  border-top-color: rgb(74, 44, 42);
}`,
    images: `body audio {
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
}

body figcaption {
  color: rgb(212, 201, 181);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
}

body img {
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
}

body video {
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
}`,
    embeds: `body .file-embed {
  background-color: rgb(42, 42, 42);
  border-bottom-color: rgb(176, 163, 140);
  border-left-color: rgb(176, 163, 140);
  border-right-color: rgb(176, 163, 140);
  border-top-color: rgb(176, 163, 140);
}

body .footnotes {
  border-top-color: rgb(212, 201, 181);
  color: rgb(212, 201, 181);
}

body .transclude {
  border-bottom-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
}

body .transclude-inner {
  border-bottom-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(176, 163, 140);
  text-decoration: line-through rgb(176, 163, 140);
  text-decoration-color: rgb(176, 163, 140);
}

body input[type=checkbox] {
  border-bottom-color: rgb(140, 129, 109);
  border-left-color: rgb(140, 129, 109);
  border-right-color: rgb(140, 129, 109);
  border-top-color: rgb(140, 129, 109);
}

body li.task-list-item[data-task='!'] {
  color: rgb(212, 201, 181);
  text-decoration: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

body li.task-list-item[data-task='*'] {
  color: rgb(212, 201, 181);
  text-decoration: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

body li.task-list-item[data-task='-'] {
  color: rgb(212, 201, 181);
  text-decoration: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

body li.task-list-item[data-task='/'] {
  color: rgb(212, 201, 181);
  text-decoration: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

body li.task-list-item[data-task='>'] {
  color: rgb(212, 201, 181);
  text-decoration: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

body li.task-list-item[data-task='?'] {
  color: rgb(212, 201, 181);
  text-decoration: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

body li.task-list-item[data-task='I'] {
  color: rgb(212, 201, 181);
  text-decoration: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

body li.task-list-item[data-task='S'] {
  color: rgb(212, 201, 181);
  text-decoration: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

body li.task-list-item[data-task='b'] {
  color: rgb(212, 201, 181);
  text-decoration: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

body li.task-list-item[data-task='c'] {
  color: rgb(212, 201, 181);
  text-decoration: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

body li.task-list-item[data-task='d'] {
  color: rgb(212, 201, 181);
  text-decoration: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

body li.task-list-item[data-task='f'] {
  color: rgb(212, 201, 181);
  text-decoration: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

body li.task-list-item[data-task='i'] {
  color: rgb(212, 201, 181);
  text-decoration: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

body li.task-list-item[data-task='k'] {
  color: rgb(212, 201, 181);
  text-decoration: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

body li.task-list-item[data-task='l'] {
  color: rgb(212, 201, 181);
  text-decoration: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

body li.task-list-item[data-task='p'] {
  color: rgb(212, 201, 181);
  text-decoration: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

body li.task-list-item[data-task='u'] {
  color: rgb(212, 201, 181);
  text-decoration: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

body li.task-list-item[data-task='w'] {
  color: rgb(212, 201, 181);
  text-decoration: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}`,
    callouts: `body .callout > .callout-content {
  background-color: rgb(42, 42, 42);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(74, 44, 42);
  border-left-color: rgb(74, 44, 42);
  border-right-color: rgb(74, 44, 42);
  border-top-color: rgb(74, 44, 42);
  color: rgb(212, 201, 181);
  font-family: "Times New Roman", Times, serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(28, 28, 28);
}

body .search > .search-container > .search-space > * {
  color: rgb(212, 201, 181);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(212, 201, 181) none 0px;
  text-decoration: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(212, 201, 181);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(212, 201, 181);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.05);
  color: rgb(212, 201, 181);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(21, 21, 21);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(255, 255, 255, 0.05);
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
  color: rgb(212, 201, 181);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.05);
  color: rgb(212, 201, 181);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "Times New Roman", Times, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(255, 69, 0);
}

body h1 {
  color: rgb(255, 69, 0);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(255, 69, 0);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 69, 0);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(212, 201, 181);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(212, 201, 181);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(176, 163, 140);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(176, 163, 140);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(74, 44, 42);
  border-left-color: rgb(74, 44, 42);
  border-right-color: rgb(74, 44, 42);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

body ::-webkit-scrollbar-corner {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

body ::-webkit-scrollbar-track {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(212, 201, 181);
  font-family: "Times New Roman", Times, serif;
  text-decoration: rgb(212, 201, 181);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(212, 201, 181);
  font-family: "Times New Roman", Times, serif;
  text-decoration: rgb(212, 201, 181);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(212, 201, 181);
  font-family: "Times New Roman", Times, serif;
  text-decoration: rgb(212, 201, 181);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(255, 255, 255, 0.1);
  border-bottom-color: rgb(255, 69, 0);
  border-left-color: rgb(255, 69, 0);
  border-right-color: rgb(255, 69, 0);
  border-top-color: rgb(255, 69, 0);
  color: rgb(255, 69, 0);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(176, 163, 140);
  border-left-color: rgb(176, 163, 140);
  border-right-color: rgb(176, 163, 140);
  border-top-color: rgb(176, 163, 140);
  color: rgb(176, 163, 140);
}`,
    footer: `body footer {
  background-color: rgb(21, 21, 21);
  border-bottom-color: rgb(74, 44, 42);
  border-left-color: rgb(74, 44, 42);
  border-right-color: rgb(74, 44, 42);
  border-top-color: rgb(74, 44, 42);
  color: rgb(212, 201, 181);
  font-family: "Times New Roman", Times, serif;
}

body footer ul li a {
  color: rgb(212, 201, 181);
  text-decoration: rgb(212, 201, 181);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(212, 201, 181);
  font-family: "Times New Roman", Times, serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
  color: rgb(212, 201, 181);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(212, 201, 181);
  text-decoration: rgb(212, 201, 181);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(212, 201, 181);
  font-family: "Times New Roman", Times, serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
}

body li.section-li > .section .meta {
  color: rgb(212, 201, 181);
  font-family: "Times New Roman", Times, serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(212, 201, 181);
  text-decoration: rgb(212, 201, 181);
}

body ul.section-ul {
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(176, 163, 140);
  border-left-color: rgb(176, 163, 140);
  border-right-color: rgb(176, 163, 140);
  border-top-color: rgb(176, 163, 140);
  color: rgb(176, 163, 140);
}

body .darkmode svg {
  color: rgb(176, 163, 140);
  stroke: rgb(176, 163, 140);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(176, 163, 140);
  border-left-color: rgb(176, 163, 140);
  border-right-color: rgb(176, 163, 140);
  border-top-color: rgb(176, 163, 140);
  color: rgb(176, 163, 140);
}

body .breadcrumb-element p {
  color: rgb(140, 129, 109);
  font-family: "??", "Times New Roman", Times, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
  color: rgb(212, 201, 181);
}

body .metadata {
  border-bottom-color: rgb(74, 44, 42);
  border-left-color: rgb(74, 44, 42);
  border-right-color: rgb(74, 44, 42);
  border-top-color: rgb(74, 44, 42);
  color: rgb(176, 163, 140);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(176, 163, 140);
  border-left-color: rgb(176, 163, 140);
  border-right-color: rgb(176, 163, 140);
  border-top-color: rgb(176, 163, 140);
  color: rgb(176, 163, 140);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(21, 21, 21);
}

body .page-header h2.page-title {
  color: rgb(212, 201, 181);
  font-family: "??", "Times New Roman", Times, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(212, 201, 181);
  text-decoration: underline dotted rgb(212, 201, 181);
}

body details {
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
}

body input[type=text] {
  border-bottom-color: rgb(176, 163, 140);
  border-left-color: rgb(176, 163, 140);
  border-right-color: rgb(176, 163, 140);
  border-top-color: rgb(176, 163, 140);
  color: rgb(176, 163, 140);
  font-family: "??", "Times New Roman", Times, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(42, 42, 42);
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
  color: rgb(212, 201, 181);
  font-family: "??", "Courier New", Courier, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
}

body sub {
  color: rgb(212, 201, 181);
}

body summary {
  color: rgb(212, 201, 181);
}

body sup {
  color: rgb(212, 201, 181);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 40;
  --accent-l: 80%;
  --accent-s: 60%;
  --background-modifier-border: #a8bdff;
  --background-modifier-border-focus: rgb(235, 214, 173);
  --background-modifier-border-hover: #88a3ff;
  --background-modifier-error: rgba(198, 40, 40, 0.2);
  --background-modifier-error-hover: #c62828;
  --background-modifier-error-rgb: 198, 40, 40;
  --background-modifier-form-field: #f5f8ff;
  --background-modifier-form-field-hover: #f5f8ff;
  --background-modifier-success: rgba(46, 125, 50, 0.2);
  --background-modifier-success-rgb: 46, 125, 50;
  --background-primary: #f5f8ff;
  --background-primary-alt: #e8eeff;
  --background-secondary: #e8eeff;
  --background-secondary-alt: #dbe4ff;
  --bases-cards-background: #f5f8ff;
  --bases-cards-cover-background: #e8eeff;
  --bases-cards-shadow: 0 0 0 1px #a8bdff;
  --bases-cards-shadow-hover: 0 0 0 1px #88a3ff;
  --bases-embed-border-color: #a8bdff;
  --bases-group-heading-property-color: #6889e0;
  --bases-table-border-color: #a8bdff;
  --bases-table-cell-background-active: #f5f8ff;
  --bases-table-cell-background-disabled: #e8eeff;
  --bases-table-cell-background-selected: rgba(235, 214, 173, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(235, 214, 173);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(235, 214, 173);
  --bases-table-group-background: #e8eeff;
  --bases-table-header-background: #f5f8ff;
  --bases-table-header-color: #6889e0;
  --bases-table-summary-background: #f5f8ff;
  --blockquote-background-color: #f5f8ff;
  --blockquote-border-color: #1565c0;
  --blockquote-border-thickness: 4px;
  --blockquote-color: #3a5ca0;
  --blockquote-font-style: italic;
  --blur-background: color-mix(in srgb, #f5f8ff 65%, transparent) linear-gradient(#f5f8ff, color-mix(in srgb, #f5f8ff 65%, transparent));
  --bold-color: #1565c0;
  --bold-weight: 700;
  --button-radius: 8px;
  --callout-background: linear-gradient(to bottom, #e8eeff, #f5f8ff);
  --callout-border-opacity: 0.7;
  --callout-border-width: 1px;
  --callout-bug: #c62828;
  --callout-content-padding: 8px;
  --callout-default: #1565c0;
  --callout-error: #c62828;
  --callout-example: #6a1b9a;
  --callout-fail: #f57c00;
  --callout-important: #ad1457;
  --callout-info: #00838f;
  --callout-padding: 12px;
  --callout-question: #fbc02d;
  --callout-quote: #6a1b9a;
  --callout-radius: 8px;
  --callout-success: #2e7d32;
  --callout-summary: #1565c0;
  --callout-tip: #2e7d32;
  --callout-title-color: rgb(235, 214, 173);
  --callout-title-size: 1.2em;
  --callout-title-weight: 600;
  --callout-todo: #f57c00;
  --callout-warning: #fbc02d;
  --canvas-background: linear-gradient(to bottom, #f5f8ff, #e8eeff);
  --canvas-card-label-color: #7896f0;
  --canvas-color-1: 198, 40, 40;
  --canvas-color-2: 245, 124, 0;
  --canvas-color-3: 251, 192, 45;
  --canvas-color-4: 46, 125, 50;
  --canvas-color-5: 0, 131, 143;
  --canvas-color-6: 106, 27, 154;
  --caret-color: rgb(235, 214, 173);
  --checkbox-border-color: #a8bdff;
  --checkbox-border-color-hover: #88a3ff;
  --checkbox-color: #dbe4ff;
  --checkbox-color-hover: #c8d7ff;
  --checkbox-marker-color: #2e7d32;
  --checklist-done-color: #6889e0;
  --code-background: #e8eeff;
  --code-border-color: #a8bdff;
  --code-comment: #6889e0;
  --code-function: #1565c0;
  --code-important: #f57c00;
  --code-keyword: #6a1b9a;
  --code-normal: #3a5ca0;
  --code-operator: #f57c00;
  --code-property: #2e7d32;
  --code-punctuation: #6889e0;
  --code-size: 13px;
  --code-string: #ad1457;
  --code-tag: #00838f;
  --code-value: #fbc02d;
  --collapse-icon-color: #7896f0;
  --collapse-icon-color-collapsed: rgb(235, 214, 173);
  --color-accent: rgb(235, 214, 173);
  --color-accent-1: rgb(241, 226, 198);
  --color-accent-2: rgb(247, 238, 222);
  --color-accent-hsl: 40, 60%, 80%;
  --color-base-00: #f5f8ff;
  --color-base-05: #e8eeff;
  --color-base-10: #dbe4ff;
  --color-base-100: #3a5ca0;
  --color-base-20: #c8d7ff;
  --color-base-25: #b8caff;
  --color-base-30: #a8bdff;
  --color-base-35: #98b0ff;
  --color-base-40: #88a3ff;
  --color-base-50: #7896f0;
  --color-base-60: #6889e0;
  --color-base-70: #587cd0;
  --color-blue: #1565c0;
  --color-blue-rgb: 21, 101, 192;
  --color-cyan: #00838f;
  --color-cyan-rgb: 0, 131, 143;
  --color-green: #2e7d32;
  --color-green-rgb: 46, 125, 50;
  --color-orange: #f57c00;
  --color-orange-rgb: 245, 124, 0;
  --color-pink: #ad1457;
  --color-pink-rgb: 173, 20, 87;
  --color-purple: #6a1b9a;
  --color-purple-rgb: 106, 27, 154;
  --color-red: #c62828;
  --color-red-rgb: 198, 40, 40;
  --color-yellow: #fbc02d;
  --color-yellow-rgb: 251, 192, 45;
  --dialog-max-height: 80vh;
  --dialog-max-width: 600px;
  --dialog-width: 500px;
  --divider-color: #a8bdff;
  --divider-color-hover: #88a3ff;
  --divider-width-hover: 2px;
  --dropdown-background: #e8eeff;
  --dropdown-background-hover: #dbe4ff;
  --dropdown-padding: 8px;
  --embed-block-shadow-hover: 0 0 0 1px #a8bdff, inset 0 0 0 1px #a8bdff;
  --embed-border-start: 2px solid rgb(235, 214, 173);
  --file-header-background: #f5f8ff;
  --file-header-background-focused: #f5f8ff;
  --flair-background: #f5f8ff;
  --flair-color: #3a5ca0;
  --footnote-divider-color: #a8bdff;
  --footnote-id-color: #6889e0;
  --footnote-id-color-no-occurrences: #7896f0;
  --graph-line: #98b0ff;
  --graph-node: #6889e0;
  --graph-node-attachment: #fbc02d;
  --graph-node-focused: rgb(235, 214, 173);
  --graph-node-tag: #2e7d32;
  --graph-node-unresolved: #7896f0;
  --graph-text: #3a5ca0;
  --h1-color: #6a1b9a;
  --h1-size: 2.2em;
  --h2-color: #1565c0;
  --h2-size: 1.9em;
  --h2-weight: 600;
  --h3-color: #2e7d32;
  --h3-size: 1.6em;
  --h3-weight: 600;
  --h4-color: #f57c00;
  --h4-size: 1.3em;
  --h4-weight: 500;
  --h5-color: #ad1457;
  --h5-size: 1.15em;
  --h5-weight: 500;
  --h6-color: #00838f;
  --h6-weight: 500;
  --header-height: 32px;
  --heading-formatting: #7896f0;
  --heading-spacing: 24px;
  --hr-color: #a8bdff;
  --icon-color: #6889e0;
  --icon-color-active: rgb(235, 214, 173);
  --icon-color-focused: #3a5ca0;
  --icon-color-hover: rgb(235, 214, 173);
  --icon-opacity: 0.8;
  --indentation-guide-color: #a8bdff;
  --indentation-guide-color-active: #88a3ff;
  --indentation-guide-width-active: 2px;
  --inline-title-color: #6a1b9a;
  --inline-title-font: '??';
  --inline-title-line-height: 1.4;
  --inline-title-size: 2em;
  --input-date-separator: #7896f0;
  --input-placeholder-color: #7896f0;
  --interactive-accent: rgb(235, 214, 173);
  --interactive-accent-hover: rgb(224, 194, 133);
  --interactive-accent-hsl: 40, 60%, 80%;
  --interactive-hover: #dbe4ff;
  --interactive-normal: #f5f8ff;
  --italic-color: #6a1b9a;
  --link-color: #1565c0;
  --link-color-hover: rgba(21, 101, 192, 0.8);
  --link-decoration: none;
  --link-external-color: #2e7d32;
  --link-external-color-hover: rgba(46, 125, 50, 0.8);
  --link-unresolved-color: #c62828;
  --link-unresolved-decoration-color: rgba(235, 214, 173, 0.3);
  --link-unresolved-decoration-style: wavy;
  --link-unresolved-opacity: 0.8;
  --list-marker-color: #7896f0;
  --list-marker-color-collapsed: rgb(235, 214, 173);
  --list-marker-color-hover: #6889e0;
  --menu-background: #e8eeff;
  --menu-border-color: #88a3ff;
  --metadata-border-color: #a8bdff;
  --metadata-divider-color: #a8bdff;
  --metadata-input-text-color: #3a5ca0;
  --metadata-label-text-color: #6889e0;
  --metadata-label-text-color-hover: #6889e0;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(235, 214, 173);
  --metadata-property-box-shadow-hover: 0 0 0 1px #88a3ff;
  --modal-background: #f5f8ff;
  --modal-border-color: #a8bdff;
  --modal-max-height: 90vh;
  --modal-max-width: 800px;
  --modal-width: 90%;
  --nav-collapse-icon-color: #7896f0;
  --nav-collapse-icon-color-collapsed: #7896f0;
  --nav-heading-color: #3a5ca0;
  --nav-heading-color-collapsed: #7896f0;
  --nav-heading-color-collapsed-hover: #6889e0;
  --nav-heading-color-hover: #3a5ca0;
  --nav-indentation-guide-color: #a8bdff;
  --nav-item-background-hover: #dbe4ff;
  --nav-item-background-selected: rgba(235, 214, 173, 0.15);
  --nav-item-color: #3a5ca0;
  --nav-item-color-active: #3a5ca0;
  --nav-item-color-highlighted: rgb(235, 214, 173);
  --nav-item-color-hover: rgb(235, 214, 173);
  --nav-item-color-selected: #3a5ca0;
  --nav-item-size: 15px;
  --nav-item-weight: 500;
  --nav-item-weight-hover: 600;
  --nav-tag-color: #7896f0;
  --nav-tag-color-active: #6889e0;
  --nav-tag-color-hover: #6889e0;
  --pdf-background: #f5f8ff;
  --pdf-page-background: #f5f8ff;
  --pdf-sidebar-background: #f5f8ff;
  --pill-background: #dbe4ff;
  --pill-background-hover: #c8d7ff;
  --pill-border-color: #a8bdff;
  --pill-border-color-hover: #88a3ff;
  --pill-color: #3a5ca0;
  --pill-color-hover: rgb(235, 214, 173);
  --pill-color-remove: #7896f0;
  --pill-color-remove-hover: rgb(235, 214, 173);
  --pill-radius: 4px;
  --prompt-background: #f5f8ff;
  --prompt-border-color: #88a3ff;
  --raised-background: color-mix(in srgb, #f5f8ff 65%, transparent) linear-gradient(#f5f8ff, color-mix(in srgb, #f5f8ff 65%, transparent));
  --ribbon-background: #e8eeff;
  --ribbon-background-collapsed: #dbe4ff;
  --ribbon-padding: 8px;
  --ribbon-width: 48px;
  --scrollbar-active-thumb-bg: #7896f0;
  --scrollbar-bg: #dbe4ff;
  --scrollbar-thumb-bg: #88a3ff;
  --search-clear-button-color: #6889e0;
  --search-icon-color: #6889e0;
  --search-result-background: #f5f8ff;
  --setting-group-heading-color: #3a5ca0;
  --setting-items-background: #e8eeff;
  --setting-items-border-color: #a8bdff;
  --sidebar-markdown-font-size: 15px;
  --sidebar-tab-text-display: block;
  --slider-thumb-border-color: #a8bdff;
  --slider-thumb-radius: 50%;
  --slider-track-background: #c8d7ff;
  --status-bar-background: #e8eeff;
  --status-bar-border-color: #a8bdff;
  --status-bar-border-width: 1px;
  --status-bar-font-size: 15px;
  --status-bar-radius: 4px;
  --status-bar-scroll-padding: 8px;
  --status-bar-text-color: #6889e0;
  --suggestion-background: #f5f8ff;
  --sync-avatar-color-1: #c62828;
  --sync-avatar-color-2: #f57c00;
  --sync-avatar-color-3: #fbc02d;
  --sync-avatar-color-4: #2e7d32;
  --sync-avatar-color-5: #00838f;
  --sync-avatar-color-6: #1565c0;
  --sync-avatar-color-7: #6a1b9a;
  --sync-avatar-color-8: #ad1457;
  --tab-background-active: #e8eeff;
  --tab-container-background: #e8eeff;
  --tab-curve: 4px;
  --tab-divider-color: #88a3ff;
  --tab-outline-color: #a8bdff;
  --tab-stacked-header-width: 32px;
  --tab-switcher-background: #e8eeff;
  --tab-switcher-menubar-background: linear-gradient(to top, #e8eeff, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(235, 214, 173);
  --tab-text-color: #6889e0;
  --tab-text-color-active: #3a5ca0;
  --tab-text-color-focused: #3a5ca0;
  --tab-text-color-focused-active: rgb(235, 214, 173);
  --tab-text-color-focused-active-current: #3a5ca0;
  --tab-text-color-focused-highlighted: rgb(235, 214, 173);
  --table-add-button-border-color: #a8bdff;
  --table-background: #f5f8ff;
  --table-border-color: #a8bdff;
  --table-drag-handle-background-active: rgb(235, 214, 173);
  --table-drag-handle-color: #7896f0;
  --table-drag-handle-color-active: #1a1a1a;
  --table-header-background: #e8eeff;
  --table-header-border-color: #a8bdff;
  --table-header-color: #3a5ca0;
  --table-row-alt-background: #e8eeff;
  --table-row-alt-background-hover: #f5f8ff;
  --table-selection: rgba(235, 214, 173, 0.1);
  --table-selection-border-color: rgb(235, 214, 173);
  --table-text-color: #3a5ca0;
  --tag-background: #dbe4ff;
  --tag-background-hover: #c8d7ff;
  --tag-border-color: #a8bdff;
  --tag-border-color-hover: rgba(235, 214, 173, 0.15);
  --tag-color: #3a5ca0;
  --tag-color-hover: rgb(235, 214, 173);
  --tag-padding-x: 4px;
  --tag-padding-y: 4px;
  --tag-radius: 4px;
  --tag-size: 13px;
  --tag-weight: 500;
  --text-accent: rgb(235, 214, 173);
  --text-accent-hover: rgb(224, 194, 133);
  --text-error: #c62828;
  --text-faint: #7896f0;
  --text-highlight-bg: rgba(251, 192, 45, 0.5);
  --text-muted: #6889e0;
  --text-normal: #3a5ca0;
  --text-on-accent: #1a1a1a;
  --text-selection: rgba(40, 60%, 85%, 0.3);
  --text-success: #2e7d32;
  --text-warning: #f57c00;
  --titlebar-background: linear-gradient(to bottom, #e8eeff, #f5f8ff);
  --titlebar-background-focused: #f5f8ff;
  --titlebar-border-color: transparent;
  --titlebar-border-width: 0;
  --titlebar-text-color: #3a5ca0;
  --titlebar-text-color-focused: #3a5ca0;
  --titlebar-text-weight: 600;
  --traffic-lights-offset-x: 32px;
  --traffic-lights-offset-y: 32px;
  --vault-profile-color: #6889e0;
  --vault-profile-color-hover: rgb(235, 214, 173);
  --vault-profile-font-size: 15px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(232, 238, 255);
  color: rgb(58, 92, 160);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(245, 248, 255);
  color: rgb(58, 92, 160);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(232, 238, 255);
  color: rgb(58, 92, 160);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(168, 189, 255);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(232, 238, 255);
  border-left-color: rgb(168, 189, 255);
  color: rgb(58, 92, 160);
}

body div#quartz-root {
  background-color: rgb(245, 248, 255);
  color: rgb(58, 92, 160);
}`,
    typography: `body .page article p > b, b {
  color: rgb(21, 101, 192);
  outline: rgb(21, 101, 192) none 0px;
  text-decoration: rgb(21, 101, 192);
  text-decoration-color: rgb(21, 101, 192);
}

body .page article p > em, em {
  color: rgb(106, 27, 154);
  outline: rgb(106, 27, 154) none 0px;
  text-decoration: rgb(106, 27, 154);
  text-decoration-color: rgb(106, 27, 154);
}

body .page article p > i, i {
  color: rgb(106, 27, 154);
  outline: rgb(106, 27, 154) none 0px;
  text-decoration: rgb(106, 27, 154);
  text-decoration-color: rgb(106, 27, 154);
}

body .page article p > strong, strong {
  color: rgb(21, 101, 192);
  outline: rgb(21, 101, 192) none 0px;
  text-decoration: rgb(21, 101, 192);
  text-decoration-color: rgb(21, 101, 192);
}

body .text-highlight {
  background-color: rgba(251, 192, 45, 0.5);
  color: rgb(58, 92, 160);
  outline: rgb(58, 92, 160) none 0px;
  text-decoration: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

body del {
  color: rgb(58, 92, 160);
  outline: rgb(58, 92, 160) none 0px;
  text-decoration: line-through rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

body p {
  color: rgb(104, 137, 224);
  font-family: "??";
  outline: rgb(104, 137, 224) none 0px;
  text-decoration: rgb(104, 137, 224);
  text-decoration-color: rgb(104, 137, 224);
}`,
    links: `body a.external, footer a {
  color: rgb(46, 125, 50);
  outline: rgb(46, 125, 50) none 0px;
  text-decoration: underline rgb(46, 125, 50);
  text-decoration-color: rgb(46, 125, 50);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(21, 101, 192);
  outline: rgb(21, 101, 192) none 0px;
  text-decoration: rgb(21, 101, 192);
  text-decoration-color: rgb(21, 101, 192);
}

body a.internal.broken {
  color: rgb(198, 40, 40);
  outline: rgb(198, 40, 40) none 0px;
  text-decoration: wavy rgba(235, 214, 173, 0.3);
  text-decoration-color: rgba(235, 214, 173, 0.3);
  text-decoration-style: wavy;
}`,
    lists: `body dd {
  color: rgb(58, 92, 160);
}

body dt {
  color: rgb(58, 92, 160);
}

body ol > li {
  color: rgb(58, 92, 160);
}

body ol.overflow {
  background-color: rgb(245, 248, 255);
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
}

body ul > li {
  color: rgb(58, 92, 160);
}

body ul.overflow {
  background-color: rgb(245, 248, 255);
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(120, 150, 240);
  text-decoration: rgb(120, 150, 240);
}

body blockquote {
  background-color: rgb(245, 248, 255);
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
}

body table {
  color: rgb(58, 92, 160);
}

body tbody tr:nth-child(even) {
  background-color: rgb(245, 248, 255);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(232, 238, 255);
}

body td {
  border-bottom-color: rgb(168, 189, 255);
  border-left-color: rgb(168, 189, 255);
  border-right-color: rgb(168, 189, 255);
  border-top-color: rgb(168, 189, 255);
  color: rgb(58, 92, 160);
}

body th {
  border-bottom-color: rgb(168, 189, 255);
  border-left-color: rgb(168, 189, 255);
  border-right-color: rgb(168, 189, 255);
  border-top-color: rgb(168, 189, 255);
  color: rgb(58, 92, 160);
}

body tr {
  background-color: rgb(232, 238, 255);
}`,
    code: `body code {
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
  color: rgb(58, 92, 160);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(232, 238, 255);
  border-bottom-color: rgb(168, 189, 255);
  border-left-color: rgb(168, 189, 255);
  border-right-color: rgb(168, 189, 255);
  border-top-color: rgb(168, 189, 255);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(232, 238, 255);
  border-bottom-color: rgb(168, 189, 255);
  border-left-color: rgb(168, 189, 255);
  border-right-color: rgb(168, 189, 255);
  border-top-color: rgb(168, 189, 255);
  color: rgb(58, 92, 160);
}

body pre > code > [data-line] {
  border-left-color: rgb(21, 101, 192);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(21, 101, 192);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(21, 101, 192);
  border-left-color: rgb(21, 101, 192);
  border-right-color: rgb(21, 101, 192);
  border-top-color: rgb(21, 101, 192);
}

body pre > code, pre:has(> code) {
  background-color: rgb(232, 238, 255);
  border-bottom-color: rgb(168, 189, 255);
  border-left-color: rgb(168, 189, 255);
  border-right-color: rgb(168, 189, 255);
  border-top-color: rgb(168, 189, 255);
}

body pre:has(> code) {
  background-color: rgb(232, 238, 255);
  border-bottom-color: rgb(168, 189, 255);
  border-left-color: rgb(168, 189, 255);
  border-right-color: rgb(168, 189, 255);
  border-top-color: rgb(168, 189, 255);
}`,
    images: `body audio {
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
}

body figcaption {
  color: rgb(58, 92, 160);
}

body figure {
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
}

body img {
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
}

body video {
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
}`,
    embeds: `body .file-embed {
  background-color: rgb(232, 238, 255);
  border-bottom-color: rgb(104, 137, 224);
  border-left-color: rgb(104, 137, 224);
  border-right-color: rgb(104, 137, 224);
  border-top-color: rgb(104, 137, 224);
}

body .footnotes {
  border-top-color: rgb(58, 92, 160);
  color: rgb(58, 92, 160);
}

body .transclude {
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(235, 214, 173);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
}

body .transclude-inner {
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(235, 214, 173);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(104, 137, 224);
  text-decoration: line-through rgb(104, 137, 224);
  text-decoration-color: rgb(104, 137, 224);
}

body input[type=checkbox] {
  border-bottom-color: rgb(168, 189, 255);
  border-left-color: rgb(168, 189, 255);
  border-right-color: rgb(168, 189, 255);
  border-top-color: rgb(168, 189, 255);
}

body li.task-list-item[data-task='!'] {
  color: rgb(58, 92, 160);
  text-decoration: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

body li.task-list-item[data-task='*'] {
  color: rgb(58, 92, 160);
  text-decoration: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

body li.task-list-item[data-task='-'] {
  color: rgb(58, 92, 160);
  text-decoration: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

body li.task-list-item[data-task='/'] {
  color: rgb(58, 92, 160);
  text-decoration: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

body li.task-list-item[data-task='>'] {
  color: rgb(58, 92, 160);
  text-decoration: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

body li.task-list-item[data-task='?'] {
  color: rgb(58, 92, 160);
  text-decoration: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

body li.task-list-item[data-task='I'] {
  color: rgb(58, 92, 160);
  text-decoration: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

body li.task-list-item[data-task='S'] {
  color: rgb(58, 92, 160);
  text-decoration: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

body li.task-list-item[data-task='b'] {
  color: rgb(58, 92, 160);
  text-decoration: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

body li.task-list-item[data-task='c'] {
  color: rgb(58, 92, 160);
  text-decoration: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

body li.task-list-item[data-task='d'] {
  color: rgb(58, 92, 160);
  text-decoration: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

body li.task-list-item[data-task='f'] {
  color: rgb(58, 92, 160);
  text-decoration: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

body li.task-list-item[data-task='i'] {
  color: rgb(58, 92, 160);
  text-decoration: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

body li.task-list-item[data-task='k'] {
  color: rgb(58, 92, 160);
  text-decoration: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

body li.task-list-item[data-task='l'] {
  color: rgb(58, 92, 160);
  text-decoration: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

body li.task-list-item[data-task='p'] {
  color: rgb(58, 92, 160);
  text-decoration: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

body li.task-list-item[data-task='u'] {
  color: rgb(58, 92, 160);
  text-decoration: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

body li.task-list-item[data-task='w'] {
  color: rgb(58, 92, 160);
  text-decoration: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
}

body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body .callout[data-callout="abstract"] {
  --callout-color: #1565c0;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(58, 92, 160);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(58, 92, 160);
  border-left-width: 1px;
  border-right-color: rgb(58, 92, 160);
  border-right-width: 1px;
  border-top-color: rgb(58, 92, 160);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  --callout-color: #c62828;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(58, 92, 160);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(58, 92, 160);
  border-left-width: 1px;
  border-right-color: rgb(58, 92, 160);
  border-right-width: 1px;
  border-top-color: rgb(58, 92, 160);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  --callout-color: #c62828;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(58, 92, 160);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(58, 92, 160);
  border-left-width: 1px;
  border-right-color: rgb(58, 92, 160);
  border-right-width: 1px;
  border-top-color: rgb(58, 92, 160);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  --callout-color: #6a1b9a;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(58, 92, 160);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(58, 92, 160);
  border-left-width: 1px;
  border-right-color: rgb(58, 92, 160);
  border-right-width: 1px;
  border-top-color: rgb(58, 92, 160);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  --callout-color: #f57c00;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(58, 92, 160);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(58, 92, 160);
  border-left-width: 1px;
  border-right-color: rgb(58, 92, 160);
  border-right-width: 1px;
  border-top-color: rgb(58, 92, 160);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  --callout-color: #00838f;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(58, 92, 160);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(58, 92, 160);
  border-left-width: 1px;
  border-right-color: rgb(58, 92, 160);
  border-right-width: 1px;
  border-top-color: rgb(58, 92, 160);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  --callout-color: #1565c0;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(58, 92, 160);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(58, 92, 160);
  border-left-width: 1px;
  border-right-color: rgb(58, 92, 160);
  border-right-width: 1px;
  border-top-color: rgb(58, 92, 160);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  --callout-color: #fbc02d;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(58, 92, 160);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(58, 92, 160);
  border-left-width: 1px;
  border-right-color: rgb(58, 92, 160);
  border-right-width: 1px;
  border-top-color: rgb(58, 92, 160);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  --callout-color: #6a1b9a;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(58, 92, 160);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(58, 92, 160);
  border-left-width: 1px;
  border-right-color: rgb(58, 92, 160);
  border-right-width: 1px;
  border-top-color: rgb(58, 92, 160);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  --callout-color: #2e7d32;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(58, 92, 160);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(58, 92, 160);
  border-left-width: 1px;
  border-right-color: rgb(58, 92, 160);
  border-right-width: 1px;
  border-top-color: rgb(58, 92, 160);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  --callout-color: #2e7d32;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(58, 92, 160);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(58, 92, 160);
  border-left-width: 1px;
  border-right-color: rgb(58, 92, 160);
  border-right-width: 1px;
  border-top-color: rgb(58, 92, 160);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  --callout-color: #f57c00;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(58, 92, 160);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(58, 92, 160);
  border-left-width: 1px;
  border-right-color: rgb(58, 92, 160);
  border-right-width: 1px;
  border-top-color: rgb(58, 92, 160);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  --callout-color: #fbc02d;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(58, 92, 160);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(58, 92, 160);
  border-left-width: 1px;
  border-right-color: rgb(58, 92, 160);
  border-right-width: 1px;
  border-top-color: rgb(58, 92, 160);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(245, 248, 255);
  border-bottom-color: rgb(168, 189, 255);
  border-left-color: rgb(168, 189, 255);
  border-right-color: rgb(168, 189, 255);
  border-top-color: rgb(168, 189, 255);
  color: rgb(58, 92, 160);
  font-family: "??";
}

body .search > .search-container > .search-space {
  background-color: rgb(245, 248, 255);
  border-bottom-color: rgb(136, 163, 255);
  border-left-color: rgb(136, 163, 255);
  border-right-color: rgb(136, 163, 255);
  border-top-color: rgb(136, 163, 255);
}

body .search > .search-container > .search-space > * {
  color: rgb(58, 92, 160);
  outline: rgb(58, 92, 160) none 0px;
  text-decoration: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(58, 92, 160);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(58, 92, 160);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(58, 92, 160);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(136, 163, 255);
  border-left-color: rgb(136, 163, 255);
  border-right-color: rgb(136, 163, 255);
  border-top-color: rgb(136, 163, 255);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(232, 238, 255);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
  color: rgb(58, 92, 160);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(58, 92, 160);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(219, 228, 255);
  border-bottom-color: rgb(168, 189, 255);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(168, 189, 255);
  border-right-color: rgb(168, 189, 255);
  border-top-color: rgb(168, 189, 255);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-weight: 500;
}

body a.internal.tag-link::before {
  color: rgb(58, 92, 160);
}

body h1 {
  color: rgb(106, 27, 154);
}

body h2 {
  color: rgb(21, 101, 192);
}

body h2.page-title, h2.page-title a {
  color: rgb(106, 27, 154);
  font-family: "??";
}

body h3 {
  color: rgb(46, 125, 50);
}

body h4 {
  color: rgb(245, 124, 0);
}

body h5 {
  color: rgb(173, 20, 87);
}

body h6 {
  color: rgb(0, 131, 143);
}

body hr {
  border-bottom-color: rgb(168, 189, 255);
  border-left-color: rgb(168, 189, 255);
  border-right-color: rgb(168, 189, 255);
}`,
    scrollbars: `body .callout {
  --callout-color: #1565c0;
  border-bottom-color: rgb(58, 92, 160);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(58, 92, 160);
  border-left-width: 1px;
  border-right-color: rgb(58, 92, 160);
  border-right-width: 1px;
  border-top-color: rgb(58, 92, 160);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  padding-left: 12px;
}

body ::-webkit-scrollbar {
  background: rgb(245, 248, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 248, 255);
}

body ::-webkit-scrollbar-corner {
  background: rgb(245, 248, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 248, 255);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(245, 248, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 248, 255);
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(245, 248, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 248, 255);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(245, 248, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 248, 255);
}

body ::-webkit-scrollbar-track {
  background: rgb(245, 248, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 248, 255);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(58, 92, 160);
  font-family: "??";
  font-weight: 500;
  text-decoration: rgb(58, 92, 160);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(58, 92, 160);
  font-family: "??";
  font-weight: 500;
  text-decoration: rgb(58, 92, 160);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(58, 92, 160);
  font-family: "??";
  font-weight: 500;
  text-decoration: rgb(58, 92, 160);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
  color: rgb(58, 92, 160);
}`,
    toc: `body li.depth-0 {
  font-weight: 500;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(104, 137, 224);
  border-left-color: rgb(104, 137, 224);
  border-right-color: rgb(104, 137, 224);
  border-top-color: rgb(104, 137, 224);
  color: rgb(104, 137, 224);
}`,
    footer: `body footer {
  background-color: rgb(232, 238, 255);
  border-bottom-color: rgb(168, 189, 255);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 1px;
  border-left-color: rgb(168, 189, 255);
  border-right-color: rgb(168, 189, 255);
  border-right-width: 1px;
  border-top-color: rgb(168, 189, 255);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(104, 137, 224);
  font-family: "??";
}

body footer ul li a {
  color: rgb(104, 137, 224);
  text-decoration: rgb(104, 137, 224);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(58, 92, 160);
  font-family: "??";
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
  color: rgb(58, 92, 160);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(58, 92, 160);
  text-decoration: rgb(58, 92, 160);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(58, 92, 160);
  font-family: "??";
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
}

body li.section-li > .section .meta {
  color: rgb(58, 92, 160);
  font-family: "??";
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(58, 92, 160);
  text-decoration: rgb(58, 92, 160);
}

body ul.section-ul {
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(104, 137, 224);
  border-left-color: rgb(104, 137, 224);
  border-right-color: rgb(104, 137, 224);
  border-top-color: rgb(104, 137, 224);
  color: rgb(104, 137, 224);
}

body .darkmode svg {
  color: rgb(104, 137, 224);
  stroke: rgb(104, 137, 224);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(104, 137, 224);
  border-left-color: rgb(104, 137, 224);
  border-right-color: rgb(104, 137, 224);
  border-top-color: rgb(104, 137, 224);
  color: rgb(104, 137, 224);
}

body .breadcrumb-element p {
  color: rgb(120, 150, 240);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
  color: rgb(58, 92, 160);
}

body .metadata {
  border-bottom-color: rgb(168, 189, 255);
  border-left-color: rgb(168, 189, 255);
  border-right-color: rgb(168, 189, 255);
  border-top-color: rgb(168, 189, 255);
  color: rgb(104, 137, 224);
}

body .metadata-properties {
  border-bottom-color: rgb(104, 137, 224);
  border-left-color: rgb(104, 137, 224);
  border-right-color: rgb(104, 137, 224);
  border-top-color: rgb(104, 137, 224);
  color: rgb(104, 137, 224);
}

body .navigation-progress {
  background-color: rgb(232, 238, 255);
}

body .page-header h2.page-title {
  color: rgb(58, 92, 160);
}

body abbr {
  color: rgb(58, 92, 160);
  text-decoration: underline dotted rgb(58, 92, 160);
}

body details {
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
}

body input[type=text] {
  border-bottom-color: rgb(104, 137, 224);
  border-left-color: rgb(104, 137, 224);
  border-right-color: rgb(104, 137, 224);
  border-top-color: rgb(104, 137, 224);
  color: rgb(104, 137, 224);
}

body kbd {
  background-color: rgb(232, 238, 255);
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
  color: rgb(58, 92, 160);
  font-size: 13px;
  padding-bottom: 1.3px;
  padding-left: 3.25px;
  padding-right: 3.25px;
  padding-top: 1.3px;
}

body progress {
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
}

body sub {
  color: rgb(58, 92, 160);
}

body summary {
  color: rgb(58, 92, 160);
}

body sup {
  color: rgb(58, 92, 160);
}`,
  },
};
