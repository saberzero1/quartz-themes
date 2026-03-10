import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "wilcoxone",
    modes: ["dark"],
    variations: [],
    fonts: ["lato", "fira-code"],
  },
  dark: {
    base: `:root:root {
  --background-modifier-border: rgb(51, 65, 148);
  --background-modifier-cover: rgba(0, 0, 0, 0.8);
  --background-modifier-error: #3d0000;
  --background-modifier-error-hover: #470000;
  --background-modifier-error-rgb: 61, 0, 0;
  --background-modifier-form-field: rgba(0, 0, 0, 0.3);
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22);
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.3);
  --background-modifier-success: #197300;
  --background-primary: rgb(8, 14, 38);
  --background-primary-alt: rgb(10, 18, 47);
  --background-secondary: rgb(15, 23, 52);
  --background-secondary-alt: rgb(18, 28, 64);
  --bases-cards-background: rgb(8, 14, 38);
  --bases-cards-cover-background: rgb(10, 18, 47);
  --bases-cards-shadow: 0 0 0 1px rgb(51, 65, 148);
  --bases-embed-border-color: rgb(51, 65, 148);
  --bases-group-heading-property-color: #999;
  --bases-table-border-color: rgb(51, 65, 148);
  --bases-table-cell-background-active: rgb(8, 14, 38);
  --bases-table-cell-background-disabled: rgb(10, 18, 47);
  --bases-table-cell-shadow-focus: 0 0 0 2px #483699;
  --bases-table-group-background: rgb(10, 18, 47);
  --bases-table-header-background: rgb(8, 14, 38);
  --bases-table-header-color: #999;
  --bases-table-summary-background: rgb(8, 14, 38);
  --blockquote-border-color: #483699;
  --blur-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent));
  --bodyFont: var(--font-interface);
  --canvas-background: rgb(8, 14, 38);
  --canvas-card-label-color: #999;
  --caret-color: rgb(232, 238, 231);
  --checkbox-border-color: #999;
  --checkbox-border-color-hover: #999;
  --checkbox-color: #483699;
  --checkbox-color-hover: #4d3ca6;
  --checkbox-marker-color: rgb(8, 14, 38);
  --checklist-done-color: #999;
  --code-background: rgb(10, 18, 47);
  --code-border-color: rgb(51, 65, 148);
  --code-comment: #999;
  --code-normal: rgb(232, 238, 231);
  --code-punctuation: #999;
  --codeFont: var(--font-interface);
  --collapse-icon-color: #999;
  --collapse-icon-color-collapsed: rgb(149, 178, 176);
  --color-1-1: rgb(8, 14, 38);
  --color-1-1-alt: rgb(10, 18, 47);
  --color-1-2: rgb(15, 23, 52);
  --color-1-2-alt: rgb(18, 28, 64);
  --color-2: rgb(51, 65, 148);
  --color-3: rgb(94, 108, 90);
  --color-3-alt: rgb(46, 53, 44);
  --color-4: rgb(232, 238, 231);
  --color-4-alt: rgb(206, 213, 205);
  --color-5: rgb(149, 178, 176);
  --color-5-alt: rgb(166, 191, 189);
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --default-font: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Microsoft YaHei Light", sans-serif;
  --divider-color: rgb(51, 65, 148);
  --divider-color-hover: #483699;
  --dropdown-background: #2a2a2a;
  --dropdown-background-hover: #303030;
  --embed-block-shadow-hover: 0 0 0 1px rgb(51, 65, 148), inset 0 0 0 1px rgb(51, 65, 148);
  --embed-border-start: 2px solid #483699;
  --fast: 0.1s;
  --file-header-background: rgb(8, 14, 38);
  --file-header-background-focused: rgb(8, 14, 38);
  --file-header-font: '??', '??', "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: #2a2a2a;
  --flair-color: rgb(232, 238, 231);
  --font-interface: '??', '??', "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-divider-color: rgb(51, 65, 148);
  --footnote-id-color: #999;
  --footnote-id-color-no-occurrences: #999;
  --graph-node: #999;
  --graph-node-focused: rgb(149, 178, 176);
  --graph-node-unresolved: #999;
  --graph-text: rgb(232, 238, 231);
  --gray: var(--text-muted);
  --headerFont: var(--font-interface);
  --heading-formatting: #999;
  --highlight: var(--text-highlight-bg);
  --hr-color: rgb(51, 65, 148);
  --icon-color: #999;
  --icon-color-active: rgb(149, 178, 176);
  --icon-color-focused: rgb(232, 238, 231);
  --icon-color-hover: #999;
  --input-date-separator: #999;
  --input-placeholder-color: #999;
  --interactive-accent: #483699;
  --interactive-accent-hover: #4d3ca6;
  --interactive-accent-rgb: 72, 54, 153;
  --interactive-hover: #303030;
  --interactive-normal: #2a2a2a;
  --interactive-success: #197300;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(149, 178, 176);
  --link-color-hover: rgb(166, 191, 189);
  --link-external-color: rgb(149, 178, 176);
  --link-external-color-hover: rgb(166, 191, 189);
  --link-unresolved-color: rgb(149, 178, 176);
  --list-marker-color: #999;
  --list-marker-color-collapsed: rgb(149, 178, 176);
  --list-marker-color-hover: #999;
  --medium: 0.2s;
  --menu-background: rgb(15, 23, 52);
  --mermaid-font: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Microsoft YaHei Light", sans-serif;
  --metadata-border-color: rgb(51, 65, 148);
  --metadata-divider-color: rgb(51, 65, 148);
  --metadata-input-font: '??', '??', "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(232, 238, 231);
  --metadata-label-font: '??', '??', "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #999;
  --metadata-label-text-color-hover: #999;
  --modal-background: rgb(8, 14, 38);
  --nav-collapse-icon-color: #999;
  --nav-collapse-icon-color-collapsed: #999;
  --nav-heading-color: rgb(232, 238, 231);
  --nav-heading-color-collapsed: #999;
  --nav-heading-color-collapsed-hover: #999;
  --nav-heading-color-hover: rgb(232, 238, 231);
  --nav-item-color: #999;
  --nav-item-color-active: rgb(232, 238, 231);
  --nav-item-color-highlighted: rgb(149, 178, 176);
  --nav-item-color-hover: rgb(232, 238, 231);
  --nav-item-color-selected: rgb(232, 238, 231);
  --nav-tag-color: #999;
  --nav-tag-color-active: #999;
  --nav-tag-color-hover: #999;
  --pdf-background: rgb(8, 14, 38);
  --pdf-page-background: rgb(8, 14, 38);
  --pdf-shadow: 0 0 0 1px rgb(51, 65, 148);
  --pdf-sidebar-background: rgb(8, 14, 38);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(51, 65, 148);
  --pill-border-color: rgb(51, 65, 148);
  --pill-color: #999;
  --pill-color-hover: rgb(232, 238, 231);
  --pill-color-remove: #999;
  --pill-color-remove-hover: rgb(149, 178, 176);
  --prompt-background: rgb(8, 14, 38);
  --raised-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent));
  --reveal-font: "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Microsoft YaHei Light", sans-serif;
  --ribbon-background: rgb(15, 23, 52);
  --ribbon-background-collapsed: rgb(8, 14, 38);
  --search-clear-button-color: #999;
  --search-icon-color: #999;
  --search-result-background: rgb(8, 14, 38);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(232, 238, 231);
  --setting-items-background: rgb(10, 18, 47);
  --setting-items-border-color: rgb(51, 65, 148);
  --slider-track-background: rgb(51, 65, 148);
  --slow: 0.5s;
  --status-bar-background: rgb(15, 23, 52);
  --status-bar-border-color: rgb(51, 65, 148);
  --status-bar-text-color: #999;
  --suggestion-background: rgb(8, 14, 38);
  --tab-background-active: rgb(8, 14, 38);
  --tab-container-background: rgb(15, 23, 52);
  --tab-outline-color: rgb(51, 65, 148);
  --tab-switcher-background: rgb(15, 23, 52);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(15, 23, 52), transparent);
  --tab-text-color: #999;
  --tab-text-color-active: #999;
  --tab-text-color-focused: #999;
  --tab-text-color-focused-active: #999;
  --tab-text-color-focused-active-current: rgb(232, 238, 231);
  --tab-text-color-focused-highlighted: rgb(149, 178, 176);
  --table-add-button-border-color: rgb(51, 65, 148);
  --table-border-color: rgb(51, 65, 148);
  --table-drag-handle-background-active: #483699;
  --table-drag-handle-color: #999;
  --table-drag-handle-color-active: rgb(232, 238, 231);
  --table-header-border-color: rgb(51, 65, 148);
  --table-header-color: rgb(232, 238, 231);
  --table-selection-border-color: #483699;
  --tag-color: rgb(149, 178, 176);
  --tag-color-hover: rgb(149, 178, 176);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(149, 178, 176);
  --text-accent-hover: rgb(166, 191, 189);
  --text-error: #ff3333;
  --text-error-hover: #990000;
  --text-faint: #999;
  --text-highlight-bg: rgb(51, 65, 148);
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted: #999;
  --text-muted-rgb: 153, 153, 153;
  --text-normal: rgb(232, 238, 231);
  --text-on-accent: rgb(232, 238, 231);
  --text-selection: rgba(23, 48, 77, 0.99);
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-interface);
  --titlebar-background: rgb(15, 23, 52);
  --titlebar-background-focused: rgb(18, 28, 64);
  --titlebar-border-color: rgb(51, 65, 148);
  --titlebar-text-color: #999;
  --titlebar-text-color-focused: rgb(232, 238, 231);
  --vault-profile-color: rgb(232, 238, 231);
  --vault-profile-color-hover: rgb(232, 238, 231);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(15, 23, 52);
  color: rgb(232, 238, 231);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(8, 14, 38);
  color: rgb(232, 238, 231);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(15, 23, 52);
  color: rgb(232, 238, 231);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(51, 65, 148);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(15, 23, 52);
  border-left-color: rgb(51, 65, 148);
  color: rgb(232, 238, 231);
}

body div#quartz-root {
  background-color: rgb(8, 14, 38);
  color: rgb(232, 238, 231);
}`,
    typography: `body .page article p > b, b {
  color: rgb(232, 238, 231);
  font-weight: 400;
  outline: rgb(232, 238, 231) none 0px;
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

body .page article p > em, em {
  color: rgb(232, 238, 231);
  font-weight: 300;
  outline: rgb(232, 238, 231) none 0px;
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

body .page article p > i, i {
  color: rgb(232, 238, 231);
  font-weight: 300;
  outline: rgb(232, 238, 231) none 0px;
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

body .page article p > strong, strong {
  color: rgb(232, 238, 231);
  font-weight: 400;
  outline: rgb(232, 238, 231) none 0px;
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

body .text-highlight {
  background-color: rgb(51, 65, 148);
  color: rgb(232, 238, 231);
  font-weight: 300;
  outline: rgb(232, 238, 231) none 0px;
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

body del {
  color: rgb(232, 238, 231);
  font-weight: 300;
  outline: rgb(232, 238, 231) none 0px;
  text-decoration: line-through rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

body p {
  color: rgb(153, 153, 153);
  font-family: Lato, sans-serif;
  font-weight: 300;
  outline: rgb(153, 153, 153) none 0px;
  text-decoration: rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}`,
    links: `body a.external, footer a {
  color: rgb(149, 178, 176);
  outline: rgb(149, 178, 176) none 0px;
  text-decoration: underline 1px rgb(72, 97, 66);
  text-decoration-color: rgb(72, 97, 66);
  text-decoration-thickness: 1px;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(149, 178, 176);
  outline: rgb(149, 178, 176) none 0px;
  text-decoration: underline 1px rgb(72, 97, 66);
  text-decoration-color: rgb(72, 97, 66);
  text-decoration-thickness: 1px;
}

body a.internal.broken {
  color: rgb(149, 178, 176);
  outline: rgb(149, 178, 176) none 0px;
  text-decoration: underline 1px dashed rgba(138, 92, 245, 0.3);
  text-decoration-style: dashed;
  text-decoration-thickness: 1px;
}`,
    lists: `body dd {
  color: rgb(232, 238, 231);
}

body dt {
  color: rgb(232, 238, 231);
  font-weight: 300;
}

body ol > li {
  color: rgb(232, 238, 231);
}

body ol.overflow {
  background-color: rgb(8, 14, 38);
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}

body ul > li {
  color: rgb(232, 238, 231);
}

body ul.overflow {
  background-color: rgb(8, 14, 38);
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(153, 153, 153);
  text-decoration: 1px rgb(72, 97, 66);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}

body table {
  color: rgb(232, 238, 231);
  width: 182.609px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(10, 18, 47);
}

body td {
  border-bottom-color: rgb(232, 238, 231);
  border-bottom-width: 0px;
  border-left-color: rgb(232, 238, 231);
  border-left-width: 0px;
  border-right-color: rgb(232, 238, 231);
  border-right-width: 0px;
  border-top-color: rgb(232, 238, 231);
  border-top-width: 0px;
  color: rgb(232, 238, 231);
  font-weight: 300;
  padding-left: 0px;
  padding-right: 0px;
}

body th {
  border-bottom-color: rgb(51, 65, 148);
  border-bottom-width: 0px;
  border-left-color: rgb(51, 65, 148);
  border-left-width: 0px;
  border-right-color: rgb(51, 65, 148);
  border-right-width: 0px;
  border-top-color: rgb(51, 65, 148);
  border-top-width: 0px;
  color: rgb(232, 238, 231);
  font-weight: 700;
  padding-bottom: 3px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 3px;
}`,
    code: `body code {
  background-color: rgb(10, 18, 47);
  border-bottom-color: rgb(232, 238, 231);
  border-bottom-left-radius: 3.5px;
  border-bottom-right-radius: 3.5px;
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
  border-top-left-radius: 3.5px;
  border-top-right-radius: 3.5px;
  color: rgb(232, 238, 231);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(10, 18, 47);
  border-bottom-color: rgb(51, 65, 148);
  border-left-color: rgb(51, 65, 148);
  border-right-color: rgb(51, 65, 148);
  border-top-color: rgb(51, 65, 148);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(10, 18, 47);
  border-bottom-color: rgb(51, 65, 148);
  border-left-color: rgb(51, 65, 148);
  border-right-color: rgb(51, 65, 148);
  border-top-color: rgb(51, 65, 148);
  color: rgb(232, 238, 231);
  font-family: "??", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body pre > code, pre:has(> code) {
  background-color: rgb(10, 18, 47);
  border-bottom-color: rgb(51, 65, 148);
  border-left-color: rgb(51, 65, 148);
  border-right-color: rgb(51, 65, 148);
  border-top-color: rgb(51, 65, 148);
  padding-bottom: 16px;
  padding-top: 48px;
}

body pre:has(> code) {
  background-color: rgb(10, 18, 47);
  border-bottom-color: rgb(51, 65, 148);
  border-left-color: rgb(51, 65, 148);
  border-right-color: rgb(51, 65, 148);
  border-top-color: rgb(51, 65, 148);
  padding-bottom: 16px;
  padding-top: 48px;
}`,
    images: `body audio {
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}

body figcaption {
  color: rgb(232, 238, 231);
}

body figure {
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}

body img {
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}

body video {
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}`,
    embeds: `body .file-embed {
  background-color: rgb(10, 18, 47);
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(15, 23, 52);
  border-left-style: solid;
  border-left-width: 8px;
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

body .footnotes {
  background-color: rgb(10, 18, 47);
  border-top-color: rgb(232, 238, 231);
  color: rgb(232, 238, 231);
}

body .transclude {
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(15, 23, 52);
  border-left-width: 8px;
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}

body .transclude-inner {
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(15, 23, 52);
  border-left-width: 8px;
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(153, 153, 153);
  text-decoration: line-through rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}

body input[type=checkbox] {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

body li.task-list-item[data-task='!'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

body li.task-list-item[data-task='*'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

body li.task-list-item[data-task='-'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

body li.task-list-item[data-task='/'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

body li.task-list-item[data-task='>'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

body li.task-list-item[data-task='?'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

body li.task-list-item[data-task='I'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

body li.task-list-item[data-task='S'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

body li.task-list-item[data-task='b'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

body li.task-list-item[data-task='c'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

body li.task-list-item[data-task='d'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

body li.task-list-item[data-task='f'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

body li.task-list-item[data-task='i'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

body li.task-list-item[data-task='k'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

body li.task-list-item[data-task='l'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

body li.task-list-item[data-task='p'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

body li.task-list-item[data-task='u'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

body li.task-list-item[data-task='w'] {
  color: rgb(232, 238, 231);
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom-color: rgb(51, 65, 148);
  border-left-color: rgb(51, 65, 148);
  border-right-color: rgb(51, 65, 148);
  border-top-color: rgb(51, 65, 148);
  color: rgb(232, 238, 231);
  font-family: Lato, sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(8, 14, 38);
}

body .search > .search-container > .search-space > * {
  color: rgb(232, 238, 231);
  font-weight: 300;
  outline: rgb(232, 238, 231) none 0px;
  text-decoration: rgb(232, 238, 231);
  text-decoration-color: rgb(232, 238, 231);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(232, 238, 231);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(232, 238, 231);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(232, 238, 231);
  font-weight: 300;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(15, 23, 52);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
  color: rgb(232, 238, 231);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(232, 238, 231);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 300;
}

body a.internal.tag-link::before {
  color: rgb(149, 178, 176);
}

body h1 {
  color: rgb(232, 238, 231);
}

body h2 {
  color: rgb(232, 238, 231);
}

body h2.page-title, h2.page-title a {
  color: rgb(232, 238, 231);
}

body h3 {
  color: rgb(232, 238, 231);
}

body h4 {
  color: rgb(232, 238, 231);
}

body h5 {
  color: rgb(232, 238, 231);
}

body h6 {
  color: rgb(232, 238, 231);
}

body hr {
  border-bottom-color: rgb(51, 65, 148);
  border-left-color: rgb(51, 65, 148);
  border-right-color: rgb(51, 65, 148);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(8, 14, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 14, 38);
}

body ::-webkit-scrollbar-corner {
  background: rgb(8, 14, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 14, 38);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(8, 14, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 14, 38);
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(8, 14, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 14, 38);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(8, 14, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 14, 38);
}

body ::-webkit-scrollbar-track {
  background: rgb(8, 14, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 14, 38);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(153, 153, 153);
  font-family: Lato, sans-serif;
  font-weight: 300;
  text-decoration: rgb(153, 153, 153);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(153, 153, 153);
  font-family: Lato, sans-serif;
  font-weight: 300;
  text-decoration: rgb(153, 153, 153);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(255, 255, 255);
  font-family: Lato, sans-serif;
  font-weight: 300;
  text-decoration: rgb(255, 255, 255);
}`,
    toc: `body li.depth-0 {
  font-weight: 300;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}`,
    footer: `body footer {
  background-color: rgb(15, 23, 52);
  border-bottom-color: rgb(51, 65, 148);
  border-left-color: rgb(51, 65, 148);
  border-right-color: rgb(51, 65, 148);
  border-top-color: rgb(51, 65, 148);
  color: rgb(153, 153, 153);
  font-family: Lato, sans-serif;
}

body footer ul li a {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(232, 238, 231);
  font-family: Lato, sans-serif;
  font-weight: 300;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
  color: rgb(232, 238, 231);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 255, 255);
  font-family: Lato, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}

body li.section-li > .section .meta {
  color: rgb(255, 255, 255);
  font-family: Lato, sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}

body ul.section-ul {
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}

body .darkmode svg {
  color: rgb(153, 153, 153);
  stroke: rgb(153, 153, 153);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}

body .breadcrumb-element p {
  color: rgb(153, 153, 153);
  font-family: "??", "??", Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
  color: rgb(232, 238, 231);
}

body .metadata {
  border-bottom-color: rgb(51, 65, 148);
  border-left-color: rgb(51, 65, 148);
  border-right-color: rgb(51, 65, 148);
  border-top-color: rgb(51, 65, 148);
  color: rgb(153, 153, 153);
}

body .metadata-properties {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}

body .navigation-progress {
  background-color: rgb(15, 23, 52);
}

body .page-header h2.page-title {
  color: rgb(232, 238, 231);
  font-family: "??", "??", Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(232, 238, 231);
  text-decoration: underline dotted rgb(232, 238, 231);
}

body details {
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}

body input[type=text] {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
  font-family: "??", "??", Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(10, 18, 47);
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
  color: rgb(232, 238, 231);
}

body progress {
  accent-color: rgb(149, 178, 176);
  border-bottom-color: rgb(232, 238, 231);
  border-left-color: rgb(232, 238, 231);
  border-right-color: rgb(232, 238, 231);
  border-top-color: rgb(232, 238, 231);
}

body sub {
  color: rgb(232, 238, 231);
}

body summary {
  color: rgb(232, 238, 231);
  font-weight: 300;
}

body sup {
  color: rgb(232, 238, 231);
}`,
  },
  light: {},
};
