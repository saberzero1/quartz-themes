import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "sandstorm",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["flow-circular"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #0f0a07;
  --background-primary: #0f0a07;
  --background-secondary: #191510;
  --background-secondary-alt: #0f0a07;
  --bases-cards-background: #0f0a07;
  --bases-cards-group-padding: 12px;
  --bases-cards-shadow: 0 0 0 1px #0f0a07;
  --bases-cards-text-size: 0.875em;
  --bases-embed-border-color: #0f0a07;
  --bases-group-heading-property-color: #d8c2b4;
  --bases-table-border-color: #0f0a07;
  --bases-table-cell-background-active: #0f0a07;
  --bases-table-cell-shadow-active: 0 0 0 2px #93684e;
  --bases-table-cell-shadow-focus: 0 0 0 2px #93684e;
  --bases-table-header-background: #0f0a07;
  --bases-table-header-color: #d8c2b4;
  --bases-table-summary-background: #0f0a07;
  --bases-table-text-size: 0.875em;
  --blockquote-border-color: #93684e;
  --blur-background: color-mix(in srgb, #0f0a07 65%, transparent) linear-gradient(#0f0a07, color-mix(in srgb, #0f0a07 65%, transparent));
  --bold-color: #b08c75;
  --canvas-background: #0f0a07;
  --canvas-card-label-color: #93684e;
  --canvas-dot-pattern: #0f0a07;
  --caret-color: #dfccc3;
  --checkbox-border-color: #93684e;
  --checkbox-border-color-hover: #d8c2b4;
  --checkbox-color: #93684e;
  --checkbox-color-hover: #93684e;
  --checkbox-marker-color: #0f0a07;
  --checklist-done-color: #d8c2b4;
  --code-border-color: #0f0a07;
  --code-comment: #93684e;
  --code-normal: #dfccc3;
  --code-punctuation: #d8c2b4;
  --collapse-icon-color: #93684e;
  --collapse-icon-color-collapsed: #93684e;
  --color-accent: #93684e;
  --color-accent-1: #93684e;
  --color-accent-2: #93684e;
  --color-base-00: #0f0a07;
  --color-base-100: #dfccc3;
  --color-base-20: #191510;
  --color-base-30: #0f0a07;
  --color-base-50: #93684e;
  --color-base-70: #d8c2b4;
  --divider-color: #0f0a07;
  --divider-color-hover: #93684e;
  --dropdown-background: #0f0a07;
  --embed-block-shadow-hover: 0 0 0 1px #0f0a07, inset 0 0 0 1px #0f0a07;
  --embed-border-start: 2px solid #93684e;
  --file-header-background: #0f0a07;
  --file-header-background-focused: #0f0a07;
  --file-header-font: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-margins: 32px;
  --flair-background: #0f0a07;
  --flair-color: #dfccc3;
  --font-default: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-divider-color: #0f0a07;
  --footnote-id-color: #d8c2b4;
  --footnote-id-color-no-occurrences: #93684e;
  --graph-node: #d8c2b4;
  --graph-node-focused: #93684e;
  --graph-node-unresolved: #93684e;
  --graph-text: #dfccc3;
  --h1-size: 1.802em;
  --h2-size: 1.602em;
  --h2-weight: 600;
  --h3-size: 1.424em;
  --h3-weight: 600;
  --h4-size: 1.266em;
  --h4-weight: 600;
  --h5-size: 1.125em;
  --h5-weight: 600;
  --heading-formatting: #93684e;
  --hr-color: #0f0a07;
  --icon-color: #d8c2b4;
  --icon-color-active: #93684e;
  --icon-color-focused: #dfccc3;
  --icon-color-hover: #d8c2b4;
  --inline-title-size: 1.802em;
  --input-date-separator: #93684e;
  --input-placeholder-color: #93684e;
  --interactive-accent: #93684e;
  --interactive-accent-hover: #93684e;
  --interactive-normal: #0f0a07;
  --italic-color: #b08c75;
  --link-color: #93684e;
  --link-color-hover: #93684e;
  --link-external-color: #93684e;
  --link-external-color-hover: #93684e;
  --link-unresolved-color: #93684e;
  --list-marker-color: #93684e;
  --list-marker-color-collapsed: #93684e;
  --list-marker-color-hover: #d8c2b4;
  --menu-background: #191510;
  --metadata-border-color: #0f0a07;
  --metadata-divider-color: #0f0a07;
  --metadata-input-font: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #dfccc3;
  --metadata-label-font: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #d8c2b4;
  --metadata-label-text-color-hover: #d8c2b4;
  --modal-background: #0f0a07;
  --nav-collapse-icon-color: #93684e;
  --nav-collapse-icon-color-collapsed: #93684e;
  --nav-heading-color: #dfccc3;
  --nav-heading-color-collapsed: #93684e;
  --nav-heading-color-collapsed-hover: #d8c2b4;
  --nav-heading-color-hover: #dfccc3;
  --nav-item-color: #d8c2b4;
  --nav-item-color-active: #dfccc3;
  --nav-item-color-highlighted: #93684e;
  --nav-item-color-hover: #dfccc3;
  --nav-item-color-selected: #dfccc3;
  --nav-tag-color: #93684e;
  --nav-tag-color-active: #d8c2b4;
  --nav-tag-color-hover: #d8c2b4;
  --pdf-background: #0f0a07;
  --pdf-page-background: #0f0a07;
  --pdf-shadow: 0 0 0 1px #0f0a07;
  --pdf-sidebar-background: #0f0a07;
  --pdf-thumbnail-shadow: 0 0 0 1px #0f0a07;
  --pill-border-color: #0f0a07;
  --pill-color: #d8c2b4;
  --pill-color-hover: #dfccc3;
  --pill-color-remove: #93684e;
  --pill-color-remove-hover: #93684e;
  --prompt-background: #0f0a07;
  --raised-background: color-mix(in srgb, #0f0a07 65%, transparent) linear-gradient(#0f0a07, color-mix(in srgb, #0f0a07 65%, transparent));
  --ribbon-background: #191510;
  --ribbon-background-collapsed: #0f0a07;
  --search-clear-button-color: #d8c2b4;
  --search-icon-color: #d8c2b4;
  --search-result-background: #0f0a07;
  --setting-group-heading-color: #dfccc3;
  --setting-items-border-color: #0f0a07;
  --slider-thumb-radius: 50%;
  --slider-track-background: #0f0a07;
  --status-bar-background: #191510;
  --status-bar-border-color: #0f0a07;
  --status-bar-text-color: #d8c2b4;
  --suggestion-background: #0f0a07;
  --tab-background-active: #0f0a07;
  --tab-container-background: #191510;
  --tab-outline-color: #0f0a07;
  --tab-switcher-background: #191510;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #93684e;
  --tab-text-color: #93684e;
  --tab-text-color-active: #d8c2b4;
  --tab-text-color-focused: #d8c2b4;
  --tab-text-color-focused-active: #d8c2b4;
  --tab-text-color-focused-active-current: #dfccc3;
  --tab-text-color-focused-highlighted: #93684e;
  --table-add-button-border-color: #0f0a07;
  --table-border-color: #0f0a07;
  --table-drag-handle-background-active: #93684e;
  --table-drag-handle-color: #93684e;
  --table-header-border-color: #0f0a07;
  --table-header-color: #dfccc3;
  --table-selection-border-color: #93684e;
  --tag-color: #93684e;
  --tag-color-hover: #93684e;
  --text-accent: #93684e;
  --text-accent-hover: #93684e;
  --text-faint: #93684e;
  --text-muted: #d8c2b4;
  --text-normal: #dfccc3;
  --text-selection: #503a2c;
  --titlebar-background: #191510;
  --titlebar-background-focused: #0f0a07;
  --titlebar-border-color: #0f0a07;
  --titlebar-text-color: #d8c2b4;
  --titlebar-text-color-focused: #dfccc3;
  --vault-profile-color: #dfccc3;
  --vault-profile-color-hover: #dfccc3;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(25, 21, 16);
  color: rgb(223, 204, 195);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(15, 10, 7);
  color: rgb(223, 204, 195);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(25, 21, 16);
  color: rgb(223, 204, 195);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(15, 10, 7);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(25, 21, 16);
  border-left-color: rgb(15, 10, 7);
  color: rgb(223, 204, 195);
}

body div#quartz-root {
  background-color: rgb(15, 10, 7);
  color: rgb(223, 204, 195);
}`,
    typography: `body .page article p > b, b {
  color: rgb(176, 140, 117);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(176, 140, 117) none 0px;
  text-decoration: rgb(176, 140, 117);
  text-decoration-color: rgb(176, 140, 117);
}

body .page article p > em, em {
  color: rgb(176, 140, 117);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(176, 140, 117) none 0px;
  text-decoration: rgb(176, 140, 117);
  text-decoration-color: rgb(176, 140, 117);
}

body .page article p > i, i {
  color: rgb(176, 140, 117);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(176, 140, 117) none 0px;
  text-decoration: rgb(176, 140, 117);
  text-decoration-color: rgb(176, 140, 117);
}

body .page article p > strong, strong {
  color: rgb(176, 140, 117);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(176, 140, 117) none 0px;
  text-decoration: rgb(176, 140, 117);
  text-decoration-color: rgb(176, 140, 117);
}

body .text-highlight {
  color: rgb(223, 204, 195);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(223, 204, 195) none 0px;
  text-decoration: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

body del {
  color: rgb(223, 204, 195);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(223, 204, 195) none 0px;
  text-decoration: line-through rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

body p {
  color: rgb(216, 194, 180);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(216, 194, 180) none 0px;
  text-decoration: rgb(216, 194, 180);
  text-decoration-color: rgb(216, 194, 180);
}`,
    links: `body a.external, footer a {
  color: rgb(147, 104, 78);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(147, 104, 78) none 0px;
  text-decoration: underline rgb(147, 104, 78);
  text-decoration-color: rgb(147, 104, 78);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(147, 104, 78);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(147, 104, 78) none 0px;
  text-decoration: underline rgb(147, 104, 78);
  text-decoration-color: rgb(147, 104, 78);
}

body a.internal.broken {
  color: rgb(147, 104, 78);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(147, 104, 78) none 0px;
}`,
    lists: `body dd {
  color: rgb(223, 204, 195);
}

body dt {
  color: rgb(223, 204, 195);
}

body ol > li {
  color: rgb(223, 204, 195);
}

body ol.overflow {
  background-color: rgb(15, 10, 7);
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
}

body ul > li {
  color: rgb(223, 204, 195);
}

body ul.overflow {
  background-color: rgb(15, 10, 7);
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(147, 104, 78);
  text-decoration: rgb(147, 104, 78);
}

body blockquote {
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
}

body table {
  color: rgb(223, 204, 195);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body td {
  border-bottom-color: rgb(15, 10, 7);
  border-left-color: rgb(15, 10, 7);
  border-right-color: rgb(15, 10, 7);
  border-top-color: rgb(15, 10, 7);
  color: rgb(223, 204, 195);
}

body th {
  border-bottom-color: rgb(15, 10, 7);
  border-left-color: rgb(15, 10, 7);
  border-right-color: rgb(15, 10, 7);
  border-top-color: rgb(15, 10, 7);
  color: rgb(223, 204, 195);
}`,
    code: `body code {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
  color: rgb(223, 204, 195);
}

body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(15, 10, 7);
  border-left-color: rgb(15, 10, 7);
  border-right-color: rgb(15, 10, 7);
  border-top-color: rgb(15, 10, 7);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-color: rgb(15, 10, 7);
  border-left-color: rgb(15, 10, 7);
  border-right-color: rgb(15, 10, 7);
  border-top-color: rgb(15, 10, 7);
  color: rgb(223, 204, 195);
}

body pre > code, pre:has(> code) {
  border-bottom-color: rgb(15, 10, 7);
  border-left-color: rgb(15, 10, 7);
  border-right-color: rgb(15, 10, 7);
  border-top-color: rgb(15, 10, 7);
}

body pre:has(> code) {
  border-bottom-color: rgb(15, 10, 7);
  border-left-color: rgb(15, 10, 7);
  border-right-color: rgb(15, 10, 7);
  border-top-color: rgb(15, 10, 7);
}`,
    images: `body audio {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
}

body figcaption {
  color: rgb(223, 204, 195);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
}

body img {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
}

body video {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(216, 194, 180);
  border-left-color: rgb(216, 194, 180);
  border-right-color: rgb(216, 194, 180);
  border-top-color: rgb(216, 194, 180);
}

body .footnotes {
  border-top-color: rgb(223, 204, 195);
  color: rgb(223, 204, 195);
}

body .transclude {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(147, 104, 78);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
}

body .transclude-inner {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(147, 104, 78);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(216, 194, 180);
  text-decoration: line-through rgb(216, 194, 180);
  text-decoration-color: rgb(216, 194, 180);
}

body input[type=checkbox] {
  border-bottom-color: rgb(147, 104, 78);
  border-left-color: rgb(147, 104, 78);
  border-right-color: rgb(147, 104, 78);
  border-top-color: rgb(147, 104, 78);
}

body li.task-list-item[data-task='!'] {
  color: rgb(223, 204, 195);
  text-decoration: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

body li.task-list-item[data-task='*'] {
  color: rgb(223, 204, 195);
  text-decoration: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

body li.task-list-item[data-task='-'] {
  color: rgb(223, 204, 195);
  text-decoration: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

body li.task-list-item[data-task='/'] {
  color: rgb(223, 204, 195);
  text-decoration: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

body li.task-list-item[data-task='>'] {
  color: rgb(223, 204, 195);
  text-decoration: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

body li.task-list-item[data-task='?'] {
  color: rgb(223, 204, 195);
  text-decoration: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

body li.task-list-item[data-task='I'] {
  color: rgb(223, 204, 195);
  text-decoration: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

body li.task-list-item[data-task='S'] {
  color: rgb(223, 204, 195);
  text-decoration: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

body li.task-list-item[data-task='b'] {
  color: rgb(223, 204, 195);
  text-decoration: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

body li.task-list-item[data-task='c'] {
  color: rgb(223, 204, 195);
  text-decoration: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

body li.task-list-item[data-task='d'] {
  color: rgb(223, 204, 195);
  text-decoration: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

body li.task-list-item[data-task='f'] {
  color: rgb(223, 204, 195);
  text-decoration: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

body li.task-list-item[data-task='i'] {
  color: rgb(223, 204, 195);
  text-decoration: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

body li.task-list-item[data-task='k'] {
  color: rgb(223, 204, 195);
  text-decoration: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

body li.task-list-item[data-task='l'] {
  color: rgb(223, 204, 195);
  text-decoration: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

body li.task-list-item[data-task='p'] {
  color: rgb(223, 204, 195);
  text-decoration: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

body li.task-list-item[data-task='u'] {
  color: rgb(223, 204, 195);
  text-decoration: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

body li.task-list-item[data-task='w'] {
  color: rgb(223, 204, 195);
  text-decoration: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(15, 10, 7);
  border-left-color: rgb(15, 10, 7);
  border-right-color: rgb(15, 10, 7);
  border-top-color: rgb(15, 10, 7);
  color: rgb(223, 204, 195);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(15, 10, 7);
}

body .search > .search-container > .search-space > * {
  color: rgb(223, 204, 195);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(223, 204, 195) none 0px;
  text-decoration: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(223, 204, 195);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(223, 204, 195);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(223, 204, 195);
}

body .search > .search-container > .search-space > input {
  background-color: rgb(15, 10, 7);
  border-bottom-color: rgb(25, 21, 16);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
  color: rgb(223, 204, 195);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(223, 204, 195);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(147, 104, 78);
}

body h1 {
  color: rgb(223, 204, 195);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(223, 204, 195);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(223, 204, 195);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(223, 204, 195);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(223, 204, 195);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(223, 204, 195);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(223, 204, 195);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(15, 10, 7);
  border-left-color: rgb(15, 10, 7);
  border-right-color: rgb(15, 10, 7);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(15, 10, 7) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 7);
}

body ::-webkit-scrollbar-corner {
  background: rgb(15, 10, 7) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 7);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(15, 10, 7) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 7);
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(15, 10, 7) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 7);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(15, 10, 7) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 7);
}

body ::-webkit-scrollbar-track {
  background: rgb(15, 10, 7) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 7);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(216, 194, 180);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(216, 194, 180);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(216, 194, 180);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(216, 194, 180);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(216, 194, 180);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(216, 194, 180);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
  color: rgb(223, 204, 195);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(216, 194, 180);
  border-left-color: rgb(216, 194, 180);
  border-right-color: rgb(216, 194, 180);
  border-top-color: rgb(216, 194, 180);
  color: rgb(216, 194, 180);
}`,
    footer: `body footer {
  background-color: rgb(25, 21, 16);
  border-bottom-color: rgb(15, 10, 7);
  border-left-color: rgb(15, 10, 7);
  border-right-color: rgb(15, 10, 7);
  border-top-color: rgb(15, 10, 7);
  color: rgb(216, 194, 180);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(216, 194, 180);
  text-decoration: rgb(216, 194, 180);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(223, 204, 195);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
  color: rgb(223, 204, 195);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(216, 194, 180);
  text-decoration: rgb(216, 194, 180);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(216, 194, 180);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
}

body li.section-li > .section .meta {
  color: rgb(216, 194, 180);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(216, 194, 180);
  text-decoration: rgb(216, 194, 180);
}

body ul.section-ul {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(216, 194, 180);
  border-left-color: rgb(216, 194, 180);
  border-right-color: rgb(216, 194, 180);
  border-top-color: rgb(216, 194, 180);
  color: rgb(216, 194, 180);
}

body .darkmode svg {
  color: rgb(216, 194, 180);
  stroke: rgb(216, 194, 180);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(216, 194, 180);
  border-left-color: rgb(216, 194, 180);
  border-right-color: rgb(216, 194, 180);
  border-top-color: rgb(216, 194, 180);
  color: rgb(216, 194, 180);
}

body .breadcrumb-element p {
  color: rgb(147, 104, 78);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
  color: rgb(223, 204, 195);
}

body .metadata {
  border-bottom-color: rgb(15, 10, 7);
  border-left-color: rgb(15, 10, 7);
  border-right-color: rgb(15, 10, 7);
  border-top-color: rgb(15, 10, 7);
  color: rgb(216, 194, 180);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: 16px;
}

body .metadata-properties {
  border-bottom-color: rgb(216, 194, 180);
  border-left-color: rgb(216, 194, 180);
  border-right-color: rgb(216, 194, 180);
  border-top-color: rgb(216, 194, 180);
  color: rgb(216, 194, 180);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(25, 21, 16);
}

body .page-header h2.page-title {
  color: rgb(223, 204, 195);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(223, 204, 195);
  text-decoration: underline dotted rgb(223, 204, 195);
}

body details {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
}

body input[type=text] {
  border-bottom-color: rgb(216, 194, 180);
  border-left-color: rgb(216, 194, 180);
  border-right-color: rgb(216, 194, 180);
  border-top-color: rgb(216, 194, 180);
  color: rgb(216, 194, 180);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
  color: rgb(223, 204, 195);
}

body progress {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
}

body sub {
  color: rgb(223, 204, 195);
}

body summary {
  color: rgb(223, 204, 195);
}

body sup {
  color: rgb(223, 204, 195);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #f2ebe4;
  --background-modifier-form-field: #f2ebe4;
  --background-modifier-form-field-hover: #f2ebe4;
  --background-primary: #f2ebe4;
  --background-primary-alt: #e2d6cd;
  --background-secondary: #e2d6cd;
  --background-secondary-alt: #dcccc0;
  --bases-cards-background: #f2ebe4;
  --bases-cards-cover-background: #e2d6cd;
  --bases-cards-group-padding: 12px;
  --bases-cards-shadow: 0 0 0 1px #f2ebe4;
  --bases-cards-text-size: 0.875em;
  --bases-embed-border-color: #f2ebe4;
  --bases-group-heading-property-color: #2a2119;
  --bases-table-border-color: #f2ebe4;
  --bases-table-cell-background-active: #f2ebe4;
  --bases-table-cell-background-disabled: #e2d6cd;
  --bases-table-cell-shadow-active: 0 0 0 2px #93684e;
  --bases-table-cell-shadow-focus: 0 0 0 2px #93684e;
  --bases-table-group-background: #e2d6cd;
  --bases-table-header-background: #f2ebe4;
  --bases-table-header-color: #2a2119;
  --bases-table-summary-background: #f2ebe4;
  --bases-table-text-size: 0.875em;
  --blockquote-border-color: #93684e;
  --blur-background: color-mix(in srgb, #f2ebe4 65%, transparent) linear-gradient(#f2ebe4, color-mix(in srgb, #f2ebe4 65%, transparent));
  --bold-color: #b08c75;
  --canvas-background: #f2ebe4;
  --canvas-card-label-color: #93684e;
  --canvas-dot-pattern: #f2ebe4;
  --caret-color: #231915;
  --checkbox-border-color: #93684e;
  --checkbox-border-color-hover: #2a2119;
  --checkbox-color: #93684e;
  --checkbox-color-hover: #93684e;
  --checkbox-marker-color: #f2ebe4;
  --checklist-done-color: #2a2119;
  --code-background: #e2d6cd;
  --code-border-color: #f2ebe4;
  --code-comment: #93684e;
  --code-normal: #231915;
  --code-punctuation: #2a2119;
  --collapse-icon-color: #93684e;
  --collapse-icon-color-collapsed: #93684e;
  --color-accent: #93684e;
  --color-accent-1: #93684e;
  --color-accent-2: #93684e;
  --color-base-00: #f2ebe4;
  --color-base-05: #dcccc0;
  --color-base-10: #e2d6cd;
  --color-base-100: #231915;
  --color-base-20: #e2d6cd;
  --color-base-30: #f2ebe4;
  --color-base-50: #93684e;
  --color-base-70: #2a2119;
  --divider-color: #f2ebe4;
  --divider-color-hover: #93684e;
  --dropdown-background: #f2ebe4;
  --dropdown-background-hover: #e2d6cd;
  --embed-block-shadow-hover: 0 0 0 1px #f2ebe4, inset 0 0 0 1px #f2ebe4;
  --embed-border-start: 2px solid #93684e;
  --file-header-background: #f2ebe4;
  --file-header-background-focused: #f2ebe4;
  --file-header-font: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-margins: 32px;
  --flair-background: #f2ebe4;
  --flair-color: #231915;
  --font-default: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-divider-color: #f2ebe4;
  --footnote-id-color: #2a2119;
  --footnote-id-color-no-occurrences: #93684e;
  --graph-node: #2a2119;
  --graph-node-focused: #93684e;
  --graph-node-unresolved: #93684e;
  --graph-text: #231915;
  --h1-size: 1.802em;
  --h2-size: 1.602em;
  --h2-weight: 600;
  --h3-size: 1.424em;
  --h3-weight: 600;
  --h4-size: 1.266em;
  --h4-weight: 600;
  --h5-size: 1.125em;
  --h5-weight: 600;
  --heading-formatting: #93684e;
  --hr-color: #f2ebe4;
  --icon-color: #2a2119;
  --icon-color-active: #93684e;
  --icon-color-focused: #231915;
  --icon-color-hover: #2a2119;
  --inline-title-size: 1.802em;
  --input-date-separator: #93684e;
  --input-placeholder-color: #93684e;
  --interactive-accent: #93684e;
  --interactive-accent-hover: #93684e;
  --interactive-hover: #e2d6cd;
  --interactive-normal: #f2ebe4;
  --italic-color: #b08c75;
  --link-color: #93684e;
  --link-color-hover: #93684e;
  --link-external-color: #93684e;
  --link-external-color-hover: #93684e;
  --link-unresolved-color: #93684e;
  --list-marker-color: #93684e;
  --list-marker-color-collapsed: #93684e;
  --list-marker-color-hover: #2a2119;
  --menu-background: #e2d6cd;
  --metadata-border-color: #f2ebe4;
  --metadata-divider-color: #f2ebe4;
  --metadata-input-font: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #231915;
  --metadata-label-font: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #2a2119;
  --metadata-label-text-color-hover: #2a2119;
  --modal-background: #f2ebe4;
  --nav-collapse-icon-color: #93684e;
  --nav-collapse-icon-color-collapsed: #93684e;
  --nav-heading-color: #231915;
  --nav-heading-color-collapsed: #93684e;
  --nav-heading-color-collapsed-hover: #2a2119;
  --nav-heading-color-hover: #231915;
  --nav-item-color: #2a2119;
  --nav-item-color-active: #231915;
  --nav-item-color-highlighted: #93684e;
  --nav-item-color-hover: #231915;
  --nav-item-color-selected: #231915;
  --nav-tag-color: #93684e;
  --nav-tag-color-active: #2a2119;
  --nav-tag-color-hover: #2a2119;
  --pdf-background: #f2ebe4;
  --pdf-page-background: #f2ebe4;
  --pdf-sidebar-background: #f2ebe4;
  --pill-border-color: #f2ebe4;
  --pill-color: #2a2119;
  --pill-color-hover: #231915;
  --pill-color-remove: #93684e;
  --pill-color-remove-hover: #93684e;
  --prompt-background: #f2ebe4;
  --raised-background: color-mix(in srgb, #f2ebe4 65%, transparent) linear-gradient(#f2ebe4, color-mix(in srgb, #f2ebe4 65%, transparent));
  --ribbon-background: #e2d6cd;
  --ribbon-background-collapsed: #f2ebe4;
  --search-clear-button-color: #2a2119;
  --search-icon-color: #2a2119;
  --search-result-background: #f2ebe4;
  --setting-group-heading-color: #231915;
  --setting-items-background: #e2d6cd;
  --setting-items-border-color: #f2ebe4;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071), 0px 6.3px 24.7px rgba(0, 0, 0, 0.112), 0px 30px 90px rgba(0, 0, 0, 0.2);
  --slider-thumb-radius: 50%;
  --slider-track-background: #f2ebe4;
  --status-bar-background: #e2d6cd;
  --status-bar-border-color: #f2ebe4;
  --status-bar-text-color: #2a2119;
  --suggestion-background: #f2ebe4;
  --tab-background-active: #f2ebe4;
  --tab-container-background: #e2d6cd;
  --tab-outline-color: #f2ebe4;
  --tab-switcher-background: #e2d6cd;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #93684e;
  --tab-text-color: #93684e;
  --tab-text-color-active: #2a2119;
  --tab-text-color-focused: #2a2119;
  --tab-text-color-focused-active: #2a2119;
  --tab-text-color-focused-active-current: #231915;
  --tab-text-color-focused-highlighted: #93684e;
  --table-add-button-border-color: #f2ebe4;
  --table-border-color: #f2ebe4;
  --table-drag-handle-background-active: #93684e;
  --table-drag-handle-color: #93684e;
  --table-header-border-color: #f2ebe4;
  --table-header-color: #231915;
  --table-selection-border-color: #93684e;
  --tag-color: #93684e;
  --tag-color-hover: #93684e;
  --text-accent: #93684e;
  --text-accent-hover: #93684e;
  --text-faint: #93684e;
  --text-muted: #2a2119;
  --text-normal: #231915;
  --text-selection: #c6a794;
  --titlebar-background: #e2d6cd;
  --titlebar-background-focused: #dcccc0;
  --titlebar-border-color: #f2ebe4;
  --titlebar-text-color: #2a2119;
  --titlebar-text-color-focused: #231915;
  --vault-profile-color: #231915;
  --vault-profile-color-hover: #231915;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(226, 214, 205);
  color: rgb(35, 25, 21);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(242, 235, 228);
  color: rgb(35, 25, 21);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(226, 214, 205);
  color: rgb(35, 25, 21);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(242, 235, 228);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(226, 214, 205);
  border-left-color: rgb(242, 235, 228);
  color: rgb(35, 25, 21);
}

body div#quartz-root {
  background-color: rgb(242, 235, 228);
  color: rgb(35, 25, 21);
}`,
    typography: `body .page article p > b, b {
  color: rgb(176, 140, 117);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(176, 140, 117) none 0px;
  text-decoration: rgb(176, 140, 117);
  text-decoration-color: rgb(176, 140, 117);
}

body .page article p > em, em {
  color: rgb(176, 140, 117);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(176, 140, 117) none 0px;
  text-decoration: rgb(176, 140, 117);
  text-decoration-color: rgb(176, 140, 117);
}

body .page article p > i, i {
  color: rgb(176, 140, 117);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(176, 140, 117) none 0px;
  text-decoration: rgb(176, 140, 117);
  text-decoration-color: rgb(176, 140, 117);
}

body .page article p > strong, strong {
  color: rgb(176, 140, 117);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(176, 140, 117) none 0px;
  text-decoration: rgb(176, 140, 117);
  text-decoration-color: rgb(176, 140, 117);
}

body .text-highlight {
  color: rgb(35, 25, 21);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(35, 25, 21) none 0px;
  text-decoration: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

body del {
  color: rgb(35, 25, 21);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(35, 25, 21) none 0px;
  text-decoration: line-through rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

body p {
  color: rgb(42, 33, 25);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(42, 33, 25) none 0px;
  text-decoration: rgb(42, 33, 25);
  text-decoration-color: rgb(42, 33, 25);
}`,
    links: `body a.external, footer a {
  color: rgb(147, 104, 78);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(147, 104, 78) none 0px;
  text-decoration: underline rgb(147, 104, 78);
  text-decoration-color: rgb(147, 104, 78);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(147, 104, 78);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(147, 104, 78) none 0px;
  text-decoration: underline rgb(147, 104, 78);
  text-decoration-color: rgb(147, 104, 78);
}

body a.internal.broken {
  color: rgb(147, 104, 78);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(147, 104, 78) none 0px;
}`,
    lists: `body dd {
  color: rgb(35, 25, 21);
}

body dt {
  color: rgb(35, 25, 21);
}

body ol > li {
  color: rgb(35, 25, 21);
}

body ol.overflow {
  background-color: rgb(242, 235, 228);
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
}

body ul > li {
  color: rgb(35, 25, 21);
}

body ul.overflow {
  background-color: rgb(242, 235, 228);
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(147, 104, 78);
  text-decoration: rgb(147, 104, 78);
}

body blockquote {
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
}

body table {
  color: rgb(35, 25, 21);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body td {
  border-bottom-color: rgb(242, 235, 228);
  border-left-color: rgb(242, 235, 228);
  border-right-color: rgb(242, 235, 228);
  border-top-color: rgb(242, 235, 228);
  color: rgb(35, 25, 21);
}

body th {
  border-bottom-color: rgb(242, 235, 228);
  border-left-color: rgb(242, 235, 228);
  border-right-color: rgb(242, 235, 228);
  border-top-color: rgb(242, 235, 228);
  color: rgb(35, 25, 21);
}`,
    code: `body code {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
  color: rgb(35, 25, 21);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(226, 214, 205);
  border-bottom-color: rgb(242, 235, 228);
  border-left-color: rgb(242, 235, 228);
  border-right-color: rgb(242, 235, 228);
  border-top-color: rgb(242, 235, 228);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(226, 214, 205);
  border-bottom-color: rgb(242, 235, 228);
  border-left-color: rgb(242, 235, 228);
  border-right-color: rgb(242, 235, 228);
  border-top-color: rgb(242, 235, 228);
  color: rgb(35, 25, 21);
}

body pre > code, pre:has(> code) {
  background-color: rgb(226, 214, 205);
  border-bottom-color: rgb(242, 235, 228);
  border-left-color: rgb(242, 235, 228);
  border-right-color: rgb(242, 235, 228);
  border-top-color: rgb(242, 235, 228);
}

body pre:has(> code) {
  background-color: rgb(226, 214, 205);
  border-bottom-color: rgb(242, 235, 228);
  border-left-color: rgb(242, 235, 228);
  border-right-color: rgb(242, 235, 228);
  border-top-color: rgb(242, 235, 228);
}`,
    images: `body audio {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
}

body figcaption {
  color: rgb(35, 25, 21);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
}

body img {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
}

body video {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
}`,
    embeds: `body .file-embed {
  background-color: rgb(226, 214, 205);
  border-bottom-color: rgb(42, 33, 25);
  border-left-color: rgb(42, 33, 25);
  border-right-color: rgb(42, 33, 25);
  border-top-color: rgb(42, 33, 25);
}

body .footnotes {
  border-top-color: rgb(35, 25, 21);
  color: rgb(35, 25, 21);
}

body .transclude {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(147, 104, 78);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
}

body .transclude-inner {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(147, 104, 78);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(42, 33, 25);
  text-decoration: line-through rgb(42, 33, 25);
  text-decoration-color: rgb(42, 33, 25);
}

body input[type=checkbox] {
  border-bottom-color: rgb(147, 104, 78);
  border-left-color: rgb(147, 104, 78);
  border-right-color: rgb(147, 104, 78);
  border-top-color: rgb(147, 104, 78);
}

body li.task-list-item[data-task='!'] {
  color: rgb(35, 25, 21);
  text-decoration: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

body li.task-list-item[data-task='*'] {
  color: rgb(35, 25, 21);
  text-decoration: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

body li.task-list-item[data-task='-'] {
  color: rgb(35, 25, 21);
  text-decoration: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

body li.task-list-item[data-task='/'] {
  color: rgb(35, 25, 21);
  text-decoration: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

body li.task-list-item[data-task='>'] {
  color: rgb(35, 25, 21);
  text-decoration: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

body li.task-list-item[data-task='?'] {
  color: rgb(35, 25, 21);
  text-decoration: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

body li.task-list-item[data-task='I'] {
  color: rgb(35, 25, 21);
  text-decoration: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

body li.task-list-item[data-task='S'] {
  color: rgb(35, 25, 21);
  text-decoration: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

body li.task-list-item[data-task='b'] {
  color: rgb(35, 25, 21);
  text-decoration: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

body li.task-list-item[data-task='c'] {
  color: rgb(35, 25, 21);
  text-decoration: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

body li.task-list-item[data-task='d'] {
  color: rgb(35, 25, 21);
  text-decoration: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

body li.task-list-item[data-task='f'] {
  color: rgb(35, 25, 21);
  text-decoration: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

body li.task-list-item[data-task='i'] {
  color: rgb(35, 25, 21);
  text-decoration: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

body li.task-list-item[data-task='k'] {
  color: rgb(35, 25, 21);
  text-decoration: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

body li.task-list-item[data-task='l'] {
  color: rgb(35, 25, 21);
  text-decoration: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

body li.task-list-item[data-task='p'] {
  color: rgb(35, 25, 21);
  text-decoration: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

body li.task-list-item[data-task='u'] {
  color: rgb(35, 25, 21);
  text-decoration: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

body li.task-list-item[data-task='w'] {
  color: rgb(35, 25, 21);
  text-decoration: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}`,
    search: `body .search > .search-button {
  background-color: rgb(242, 235, 228);
  border-bottom-color: rgb(242, 235, 228);
  border-left-color: rgb(242, 235, 228);
  border-right-color: rgb(242, 235, 228);
  border-top-color: rgb(242, 235, 228);
  color: rgb(35, 25, 21);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(242, 235, 228);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.2) 0px 30px 90px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(35, 25, 21);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(35, 25, 21) none 0px;
  text-decoration: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(35, 25, 21);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(35, 25, 21);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(35, 25, 21);
}

body .search > .search-container > .search-space > input {
  background-color: rgb(242, 235, 228);
  border-bottom-color: rgb(226, 214, 205);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
  color: rgb(35, 25, 21);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(35, 25, 21);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(147, 104, 78);
}

body h1 {
  color: rgb(35, 25, 21);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(35, 25, 21);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(35, 25, 21);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(35, 25, 21);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(35, 25, 21);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(35, 25, 21);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(35, 25, 21);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(242, 235, 228);
  border-left-color: rgb(242, 235, 228);
  border-right-color: rgb(242, 235, 228);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(242, 235, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 235, 228);
}

body ::-webkit-scrollbar-corner {
  background: rgb(242, 235, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 235, 228);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(242, 235, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 235, 228);
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(242, 235, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 235, 228);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(242, 235, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 235, 228);
}

body ::-webkit-scrollbar-track {
  background: rgb(242, 235, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 235, 228);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(42, 33, 25);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(42, 33, 25);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(42, 33, 25);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(42, 33, 25);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(42, 33, 25);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(42, 33, 25);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
  color: rgb(35, 25, 21);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(42, 33, 25);
  border-left-color: rgb(42, 33, 25);
  border-right-color: rgb(42, 33, 25);
  border-top-color: rgb(42, 33, 25);
  color: rgb(42, 33, 25);
}`,
    footer: `body footer {
  background-color: rgb(226, 214, 205);
  border-bottom-color: rgb(242, 235, 228);
  border-left-color: rgb(242, 235, 228);
  border-right-color: rgb(242, 235, 228);
  border-top-color: rgb(242, 235, 228);
  color: rgb(42, 33, 25);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(42, 33, 25);
  text-decoration: rgb(42, 33, 25);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(35, 25, 21);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
  color: rgb(35, 25, 21);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(42, 33, 25);
  text-decoration: rgb(42, 33, 25);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(42, 33, 25);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
}

body li.section-li > .section .meta {
  color: rgb(42, 33, 25);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(42, 33, 25);
  text-decoration: rgb(42, 33, 25);
}

body ul.section-ul {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(42, 33, 25);
  border-left-color: rgb(42, 33, 25);
  border-right-color: rgb(42, 33, 25);
  border-top-color: rgb(42, 33, 25);
  color: rgb(42, 33, 25);
}

body .darkmode svg {
  color: rgb(42, 33, 25);
  stroke: rgb(42, 33, 25);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(42, 33, 25);
  border-left-color: rgb(42, 33, 25);
  border-right-color: rgb(42, 33, 25);
  border-top-color: rgb(42, 33, 25);
  color: rgb(42, 33, 25);
}

body .breadcrumb-element p {
  color: rgb(147, 104, 78);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
  color: rgb(35, 25, 21);
}

body .metadata {
  border-bottom-color: rgb(242, 235, 228);
  border-left-color: rgb(242, 235, 228);
  border-right-color: rgb(242, 235, 228);
  border-top-color: rgb(242, 235, 228);
  color: rgb(42, 33, 25);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: 16px;
}

body .metadata-properties {
  border-bottom-color: rgb(42, 33, 25);
  border-left-color: rgb(42, 33, 25);
  border-right-color: rgb(42, 33, 25);
  border-top-color: rgb(42, 33, 25);
  color: rgb(42, 33, 25);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(226, 214, 205);
}

body .page-header h2.page-title {
  color: rgb(35, 25, 21);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(35, 25, 21);
  text-decoration: underline dotted rgb(35, 25, 21);
}

body details {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
}

body input[type=text] {
  border-bottom-color: rgb(42, 33, 25);
  border-left-color: rgb(42, 33, 25);
  border-right-color: rgb(42, 33, 25);
  border-top-color: rgb(42, 33, 25);
  color: rgb(42, 33, 25);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(226, 214, 205);
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
  color: rgb(35, 25, 21);
}

body progress {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
}

body sub {
  color: rgb(35, 25, 21);
}

body summary {
  color: rgb(35, 25, 21);
}

body sup {
  color: rgb(35, 25, 21);
}`,
  },
};
