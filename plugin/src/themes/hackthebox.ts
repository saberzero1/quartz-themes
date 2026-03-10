import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "hackthebox",
    modes: ["dark"],
    variations: [],
    fonts: ["open-sans"],
  },
  dark: {
    base: `:root:root {
  --accent-a: 1;
  --accent-h: 80;
  --accent-l: 47%;
  --accent-s: 100%;
  --background-modifier-active-hover: rgba(160, 240, 0, 0.1);
  --background-modifier-border: #4a5466;
  --background-modifier-border-focus: none;
  --background-modifier-border-hover: #4a5466;
  --background-modifier-error: #ff8484;
  --background-modifier-form-field: #1a2331;
  --background-modifier-form-field-hover: #1a2331;
  --background-modifier-message: #141d2b;
  --background-modifier-success: #c5f467;
  --background-primary: #141d2b;
  --background-primary-alt: #1a2331;
  --background-secondary: #1a2331;
  --bases-cards-background: #141d2b;
  --bases-cards-border-width: 2px;
  --bases-cards-cover-background: #1a2331;
  --bases-cards-shadow: 0 0 0 1px #4a5466;
  --bases-cards-shadow-hover: 0 0 0 1px #4a5466;
  --bases-embed-border-color: #4a5466;
  --bases-group-heading-property-color: #a4b1cd;
  --bases-header-border-width: 0 0 2px 0;
  --bases-table-border-color: #4a5466;
  --bases-table-cell-background-active: #141d2b;
  --bases-table-cell-background-disabled: #1a2331;
  --bases-table-cell-background-selected: rgba(160, 240, 0, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px none;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(160, 240, 0);
  --bases-table-column-border-width: 2px;
  --bases-table-container-border-width: 2px;
  --bases-table-group-background: #1a2331;
  --bases-table-header-background: #141d2b;
  --bases-table-header-color: #a4b1cd;
  --bases-table-row-border-width: 2px;
  --bases-table-summary-background: #141d2b;
  --blockquote-background-color: #0b121f;
  --blockquote-border-color: #9fef00;
  --blockquote-border-radius: 5px;
  --blockquote-border-thickness: 4px;
  --blockquote-font-style: italic;
  --blockquote-padding: 10px;
  --blur-background: color-mix(in srgb, #4a5466 65%, transparent) linear-gradient(#4a5466, color-mix(in srgb, #4a5466 65%, transparent));
  --border-width: 2px;
  --button-radius: 4px;
  --canvas-background: #1a2331;
  --canvas-card-label-color: #cad2e2;
  --caret-color: #9fef00;
  --checkbox-border-color: #cad2e2;
  --checkbox-border-color-hover: #a4b1cd;
  --checkbox-color: rgb(160, 240, 0);
  --checkbox-color-hover: hsl(77, 102%, 54.05%);
  --checkbox-marker-color: #141d2b;
  --checkbox-radius: 3px;
  --checklist-done-color: #a4b1cd;
  --code-attribute: #ff3e3e;
  --code-background: #1a2331;
  --code-border-color: #4a5466;
  --code-comment: #c5d1eb;
  --code-func-name: #2e6cff;
  --code-function: #ffcc5c;
  --code-important: #ffaf00;
  --code-keyword: #cf8dfb;
  --code-normal: #a4b1cd;
  --code-operator: #ff8484;
  --code-property: #a4b1cd;
  --code-punctuation: #a4b1cd;
  --code-string: #c5f467;
  --code-tag: #ffaf00;
  --code-value: #5cb2ff;
  --code-white-space: pre;
  --collapse-icon-color: #cad2e2;
  --collapse-icon-color-collapsed: hsl(77, 102%, 54.05%);
  --color-accent: rgb(160, 240, 0);
  --color-accent-1: hsl(77, 102%, 54.05%);
  --color-accent-2: hsl(75, 105%, 60.63%);
  --color-accent-hsl: 80, 100%, 47%;
  --color-base-25: #1a2331;
  --color-base-35: transparent;
  --color-base-40: transparent;
  --color-base-50: #cad2e2;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #4a5466;
  --divider-color-hover: #9fef00;
  --drag-ghost-background: #9fef00;
  --drag-ghost-text-color: black;
  --dropdown-background: #4a5466;
  --dropdown-background-hover: transparent;
  --embed-background: #1a2331;
  --embed-block-shadow-hover: 0 0 0 1px #4a5466, inset 0 0 0 1px #4a5466;
  --embed-border-start: 2px solid rgb(160, 240, 0);
  --file-header-background: #141d2b;
  --file-header-background-focused: #141d2b;
  --file-header-border: 2px solid transparent;
  --flair-background: #4a5466;
  --flair-color: #a4b1cd;
  --footnote-divider-color: #4a5466;
  --footnote-divider-width: 2px;
  --footnote-id-color: #a4b1cd;
  --footnote-id-color-no-occurrences: #cad2e2;
  --footnote-input-background-active: #1a2331;
  --graph-line: #4a5466;
  --graph-node: #cad2e2;
  --graph-node-focused: #9fef00;
  --graph-node-unresolved: #a4b1cd;
  --graph-text: #a4b1cd;
  --gray: var(--text-muted);
  --h1-color: #cad2e2;
  --h1-size: 2em;
  --h2-color: #cad2e2;
  --h2-size: 1.6em;
  --h2-weight: 700;
  --h3-color: #cad2e2;
  --h3-size: 1.37em;
  --h3-weight: 700;
  --h4-color: #cad2e2;
  --h4-size: 1.25em;
  --h4-weight: 700;
  --h5-color: #cad2e2;
  --h5-size: 1.12em;
  --h5-weight: 700;
  --h6-color: #cad2e2;
  --h6-size: 1.12em;
  --h6-weight: 700;
  --heading-formatting: #cad2e2;
  --highlight: var(--text-highlight-bg);
  --hr-color: #1a2332;
  --htb-border: #4a5466;
  --htb-divider-color: #1a2332;
  --htb-heading: #cad2e2;
  --htb-lime: #9fef00;
  --htb-text-color: #a4b1cd;
  --icon-color: #a4b1cd;
  --icon-color-active: red;
  --icon-color-focused: #9fef00;
  --icon-color-hover: #cad2e2;
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --inline-title-color: #cad2e2;
  --inline-title-size: 2em;
  --input-border-width: 2px;
  --input-date-separator: #cad2e2;
  --input-placeholder-color: #cad2e2;
  --interactive-accent: rgb(160, 240, 0);
  --interactive-accent-hover: hsl(77, 102%, 54.05%);
  --interactive-accent-hsl: 80, 100%, 47%;
  --interactive-hover: transparent;
  --interactive-normal: #4a5466;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #9fef00;
  --link-color-hover: #9fef00;
  --link-decoration: normal;
  --link-external-color: #007bff;
  --link-external-color-hover: #007bff;
  --link-external-decoration: normal;
  --link-unresolved-color: #ff8484;
  --link-unresolved-decoration-color: rgba(160, 240, 0, 0.3);
  --list-bullet-size: 7px;
  --list-marker-color: #9fef00;
  --list-marker-color-collapsed: #cad2e2;
  --list-marker-color-hover: #a4b1cd;
  --list-spacing: 2px;
  --menu-background: #1a2331;
  --menu-border-color: #4a5466;
  --menu-border-width: 2px;
  --metadata-border-color: #4a5466;
  --metadata-divider-color: #4a5466;
  --metadata-input-background-active: #1a2331;
  --metadata-input-text-color: #a4b1cd;
  --metadata-label-text-color: #cad2e2;
  --metadata-label-text-color-hover: #a4b1cd;
  --metadata-property-box-shadow-focus: 0 0 0 2px none;
  --metadata-property-box-shadow-hover: 0 0 0 2px #4a5466;
  --modal-background: #141d2b;
  --modal-border-color: transparent;
  --modal-border-width: 2px;
  --modal-radius: 10px;
  --nav-collapse-icon-color: #cad2e2;
  --nav-collapse-icon-color-collapsed: #cad2e2;
  --nav-heading-color: #a4b1cd;
  --nav-heading-color-collapsed: #cad2e2;
  --nav-heading-color-collapsed-hover: #a4b1cd;
  --nav-heading-color-hover: #a4b1cd;
  --nav-indentation-guide-width: 2px;
  --nav-item-background-selected: rgba(160, 240, 0, 0.15);
  --nav-item-color: #a4b1cd;
  --nav-item-color-active: #a4b1cd;
  --nav-item-color-highlighted: hsl(77, 102%, 54.05%);
  --nav-item-color-hover: #a4b1cd;
  --nav-item-color-selected: #a4b1cd;
  --nav-tag-color: #cad2e2;
  --nav-tag-color-active: #a4b1cd;
  --nav-tag-color-hover: #a4b1cd;
  --pdf-background: #141d2b;
  --pdf-page-background: #141d2b;
  --pdf-shadow: 0 0 0 1px #4a5466;
  --pdf-sidebar-background: #141d2b;
  --pdf-thumbnail-shadow: 0 0 0 1px #4a5466;
  --pill-border-color: #4a5466;
  --pill-border-color-hover: #4a5466;
  --pill-border-width: 2px;
  --pill-color: #a4b1cd;
  --pill-color-hover: #a4b1cd;
  --pill-color-remove: #cad2e2;
  --pill-color-remove-hover: hsl(77, 102%, 54.05%);
  --prompt-background: #141d2b;
  --prompt-border-color: transparent;
  --prompt-border-width: 2px;
  --raised-background: color-mix(in srgb, #4a5466 65%, transparent) linear-gradient(#4a5466, color-mix(in srgb, #4a5466 65%, transparent));
  --ribbon-background: #1a2331;
  --ribbon-background-collapsed: #141d2b;
  --scrollbar-active-thumb-bg: #9fef00;
  --search-clear-button-color: #a4b1cd;
  --search-icon-color: #a4b1cd;
  --search-result-background: #141d2b;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #a4b1cd;
  --setting-items-background: #1a2331;
  --setting-items-border-color: #4a5466;
  --slider-thumb-border-color: #4a5466;
  --slider-thumb-border-width: 2px;
  --slider-track-background: #4a5466;
  --status-bar-background: #1a2331;
  --status-bar-border-color: #4a5466;
  --status-bar-border-width: 2px 0 0 2px;
  --status-bar-text-color: #a4b1cd;
  --suggestion-background: #141d2b;
  --tab-background-active: #141d2b;
  --tab-container-background: #1a2331;
  --tab-divider-color: #4a5466;
  --tab-outline-color: #4a5466;
  --tab-radius-active: 5px 5px 0px 0px;
  --tab-switcher-background: #1a2331;
  --tab-switcher-menubar-background: linear-gradient(to top, #1a2331, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(160, 240, 0);
  --tab-text-color: #cad2e2;
  --tab-text-color-active: #a4b1cd;
  --tab-text-color-focused: #4a5466;
  --tab-text-color-focused-active: #a4b1cd;
  --tab-text-color-focused-active-current: #a4b1cd;
  --tab-text-color-focused-highlighted: hsl(77, 102%, 54.05%);
  --table-add-button-border-color: #4a5466;
  --table-add-button-border-width: 2px;
  --table-border-color: #4a5466;
  --table-border-width: 2px;
  --table-column-first-border-width: 2px;
  --table-column-last-border-width: 2px;
  --table-drag-handle-background-active: rgb(160, 240, 0);
  --table-drag-handle-color: #cad2e2;
  --table-drag-handle-color-active: #141d2b;
  --table-header-border-color: #4a5466;
  --table-header-border-width: 2px;
  --table-header-color: #cad2e2;
  --table-row-alt-background: #1a2331;
  --table-row-last-border-width: 2px;
  --table-selection: rgba(160, 240, 0, 0.1);
  --table-selection-border-color: rgb(160, 240, 0);
  --table-text-color: #a4b1cd;
  --tag-background: rgba(160, 240, 0, 0.1);
  --tag-background-hover: rgba(160, 240, 0, 0.2);
  --tag-border-color: rgba(160, 240, 0, 0.15);
  --tag-border-color-hover: rgba(160, 240, 0, 0.15);
  --tag-color: hsl(77, 102%, 54.05%);
  --tag-color-hover: hsl(77, 102%, 54.05%);
  --tertiary: var(--text-accent-hover);
  --text-accent: hsl(77, 102%, 54.05%);
  --text-accent-hover: hsl(75, 105%, 60.63%);
  --text-faint: #cad2e2;
  --text-highlight-bg: #9fef00;
  --text-muted: #a4b1cd;
  --text-normal: #a4b1cd;
  --text-on-accent: #141d2b;
  --text-selection: #9fef00;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #1a2331;
  --titlebar-background-focused: #1a2331;
  --titlebar-border-color: #4a5466;
  --titlebar-text-color: #cad2e2;
  --titlebar-text-color-focused: #cad2e2;
  --toggle-radius: 999px;
  --toggle-thumb-radius: 999px;
  --vault-name-color: #9fef00;
  --vault-profile-color: #a4b1cd;
  --vault-profile-color-hover: #a4b1cd;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(26, 35, 49);
  color: rgb(164, 177, 205);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(20, 29, 43);
  color: rgb(164, 177, 205);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(26, 35, 49);
  color: rgb(164, 177, 205);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(74, 84, 102);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(26, 35, 49);
  border-left-color: rgb(74, 84, 102);
  color: rgb(164, 177, 205);
}

body div#quartz-root {
  background-color: rgb(20, 29, 43);
  color: rgb(164, 177, 205);
}`,
    typography: `body .page article p > b, b {
  color: rgb(164, 177, 205);
  outline: rgb(164, 177, 205) none 0px;
  text-decoration: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

body .page article p > em, em {
  color: rgb(164, 177, 205);
  outline: rgb(164, 177, 205) none 0px;
  text-decoration: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

body .page article p > i, i {
  color: rgb(164, 177, 205);
  outline: rgb(164, 177, 205) none 0px;
  text-decoration: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

body .page article p > strong, strong {
  color: rgb(164, 177, 205);
  outline: rgb(164, 177, 205) none 0px;
  text-decoration: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

body .text-highlight {
  background-color: rgb(159, 239, 0);
  color: rgb(164, 177, 205);
  outline: rgb(164, 177, 205) none 0px;
  text-decoration: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

body del {
  color: rgb(164, 177, 205);
  outline: rgb(164, 177, 205) none 0px;
  text-decoration: line-through rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

body p {
  color: rgb(164, 177, 205);
  font-family: Helvetica, Arial, sans-serif;
  outline: rgb(164, 177, 205) none 0px;
  text-decoration: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}`,
    links: `body a.external, footer a {
  color: rgb(0, 123, 255);
  outline: rgb(0, 123, 255) none 0px;
  text-decoration: rgb(0, 123, 255);
  text-decoration-color: rgb(0, 123, 255);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(159, 239, 0);
  outline: rgb(159, 239, 0) none 0px;
  text-decoration: rgb(159, 239, 0);
  text-decoration-color: rgb(159, 239, 0);
}

body a.internal.broken {
  color: rgb(255, 132, 132);
  outline: rgb(255, 132, 132) none 0px;
  text-decoration: rgba(160, 240, 0, 0.3);
  text-decoration-color: rgba(160, 240, 0, 0.3);
}`,
    lists: `body dd {
  color: rgb(164, 177, 205);
}

body dt {
  color: rgb(164, 177, 205);
}

body ol > li {
  color: rgb(164, 177, 205);
}

body ol.overflow {
  background-color: rgb(20, 29, 43);
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
}

body ul > li {
  color: rgb(164, 177, 205);
}

body ul.overflow {
  background-color: rgb(20, 29, 43);
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(202, 210, 226);
  text-decoration: rgb(202, 210, 226);
}

body blockquote {
  background-color: rgb(11, 18, 31);
  font-style: italic;
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
}

body table {
  color: rgb(164, 177, 205);
  width: 228.219px;
}

body tbody tr:nth-child(odd) {
  background-color: rgb(26, 35, 49);
}

body td {
  border-bottom-color: rgb(74, 84, 102);
  border-bottom-width: 2px;
  border-left-color: rgb(74, 84, 102);
  border-left-width: 2px;
  border-right-color: rgb(74, 84, 102);
  border-right-width: 2px;
  border-top-color: rgb(74, 84, 102);
  border-top-width: 0px;
  color: rgb(164, 177, 205);
}

body th {
  border-bottom-color: rgb(74, 84, 102);
  border-bottom-width: 2px;
  border-left-color: rgb(74, 84, 102);
  border-left-width: 2px;
  border-right-color: rgb(74, 84, 102);
  border-right-width: 2px;
  border-top-color: rgb(74, 84, 102);
  border-top-left-radius: 8px;
  border-top-width: 2px;
  color: rgb(202, 210, 226);
}`,
    code: `body code {
  border-bottom-color: rgb(159, 239, 0);
  border-left-color: rgb(159, 239, 0);
  border-right-color: rgb(159, 239, 0);
  border-top-color: rgb(159, 239, 0);
  color: rgb(159, 239, 0);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(26, 35, 49);
  border-bottom-color: rgb(74, 84, 102);
  border-left-color: rgb(74, 84, 102);
  border-right-color: rgb(74, 84, 102);
  border-top-color: rgb(74, 84, 102);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(26, 35, 49);
  border-bottom-color: rgb(74, 84, 102);
  border-left-color: rgb(74, 84, 102);
  border-right-color: rgb(74, 84, 102);
  border-top-color: rgb(74, 84, 102);
  color: rgb(164, 177, 205);
}

body pre > code > [data-line] {
  border-left-color: rgb(255, 204, 92);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 204, 92);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 204, 92);
  border-left-color: rgb(255, 204, 92);
  border-right-color: rgb(255, 204, 92);
  border-top-color: rgb(255, 204, 92);
}

body pre > code, pre:has(> code) {
  background-color: rgb(26, 35, 49);
  border-bottom-color: rgb(74, 84, 102);
  border-left-color: rgb(74, 84, 102);
  border-right-color: rgb(74, 84, 102);
  border-top-color: rgb(74, 84, 102);
}

body pre:has(> code) {
  background-color: rgb(26, 35, 49);
  border-bottom-color: rgb(74, 84, 102);
  border-left-color: rgb(74, 84, 102);
  border-right-color: rgb(74, 84, 102);
  border-top-color: rgb(74, 84, 102);
}`,
    images: `body audio {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
}

body figcaption {
  color: rgb(164, 177, 205);
}

body figure {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
}

body img {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
}

body video {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
}`,
    embeds: `body .file-embed {
  background-color: rgb(26, 35, 49);
  border-bottom-color: rgb(255, 132, 132);
  border-left-color: rgb(255, 132, 132);
  border-right-color: rgb(255, 132, 132);
  border-top-color: rgb(255, 132, 132);
}

body .footnotes {
  border-top-color: rgb(164, 177, 205);
  color: rgb(164, 177, 205);
}

body .transclude {
  background-color: rgb(26, 35, 49);
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(160, 240, 0);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
}

body .transclude-inner {
  background-color: rgb(26, 35, 49);
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(160, 240, 0);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(164, 177, 205);
  text-decoration: line-through rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

body input[type=checkbox] {
  border-bottom-color: rgb(202, 210, 226);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(202, 210, 226);
  border-right-color: rgb(202, 210, 226);
  border-top-color: rgb(202, 210, 226);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(164, 177, 205);
  text-decoration: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

body li.task-list-item[data-task='*'] {
  color: rgb(164, 177, 205);
  text-decoration: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

body li.task-list-item[data-task='-'] {
  color: rgb(164, 177, 205);
  text-decoration: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

body li.task-list-item[data-task='/'] {
  color: rgb(164, 177, 205);
  text-decoration: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

body li.task-list-item[data-task='>'] {
  color: rgb(164, 177, 205);
  text-decoration: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

body li.task-list-item[data-task='?'] {
  color: rgb(164, 177, 205);
  text-decoration: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

body li.task-list-item[data-task='I'] {
  color: rgb(164, 177, 205);
  text-decoration: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

body li.task-list-item[data-task='S'] {
  color: rgb(164, 177, 205);
  text-decoration: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

body li.task-list-item[data-task='b'] {
  color: rgb(164, 177, 205);
  text-decoration: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

body li.task-list-item[data-task='c'] {
  color: rgb(164, 177, 205);
  text-decoration: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

body li.task-list-item[data-task='d'] {
  color: rgb(164, 177, 205);
  text-decoration: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

body li.task-list-item[data-task='f'] {
  color: rgb(164, 177, 205);
  text-decoration: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

body li.task-list-item[data-task='i'] {
  color: rgb(164, 177, 205);
  text-decoration: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

body li.task-list-item[data-task='k'] {
  color: rgb(164, 177, 205);
  text-decoration: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

body li.task-list-item[data-task='l'] {
  color: rgb(164, 177, 205);
  text-decoration: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

body li.task-list-item[data-task='p'] {
  color: rgb(164, 177, 205);
  text-decoration: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

body li.task-list-item[data-task='u'] {
  color: rgb(164, 177, 205);
  text-decoration: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

body li.task-list-item[data-task='w'] {
  color: rgb(164, 177, 205);
  text-decoration: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}`,
    search: `body .search > .search-button {
  background-color: rgb(26, 35, 49);
  border-bottom-color: rgb(74, 84, 102);
  border-bottom-width: 2px;
  border-left-color: rgb(74, 84, 102);
  border-left-width: 2px;
  border-right-color: rgb(74, 84, 102);
  border-right-width: 2px;
  border-top-color: rgb(74, 84, 102);
  border-top-width: 2px;
  color: rgb(164, 177, 205);
  font-family: Helvetica, Arial, sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(20, 29, 43);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 2px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 2px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 2px;
}

body .search > .search-container > .search-space > * {
  color: rgb(164, 177, 205);
  outline: rgb(164, 177, 205) none 0px;
  text-decoration: rgb(164, 177, 205);
  text-decoration-color: rgb(164, 177, 205);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(164, 177, 205);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(164, 177, 205);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(164, 177, 205);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 2px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 2px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 2px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(26, 35, 49);
  border-bottom-width: 2px;
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
  color: rgb(164, 177, 205);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(164, 177, 205);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(160, 240, 0, 0.1);
  border-bottom-color: rgba(160, 240, 0, 0.15);
  border-left-color: rgba(160, 240, 0, 0.15);
  border-right-color: rgba(160, 240, 0, 0.15);
  border-top-color: rgba(160, 240, 0, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(189, 255, 21);
}

body h1 {
  color: rgb(202, 210, 226);
}

body h2 {
  color: rgb(202, 210, 226);
}

body h2.page-title, h2.page-title a {
  color: rgb(202, 210, 226);
}

body h3 {
  color: rgb(202, 210, 226);
}

body h4 {
  color: rgb(202, 210, 226);
}

body h5 {
  color: rgb(202, 210, 226);
}

body h6 {
  color: rgb(202, 210, 226);
}

body hr {
  border-bottom-color: rgb(74, 84, 102);
  border-left-color: rgb(74, 84, 102);
  border-right-color: rgb(74, 84, 102);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(20, 29, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 29, 43);
}

body ::-webkit-scrollbar-corner {
  background: rgb(20, 29, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 29, 43);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(20, 29, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 29, 43);
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(20, 29, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 29, 43);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(20, 29, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 29, 43);
}

body ::-webkit-scrollbar-track {
  background: rgb(20, 29, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 29, 43);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(164, 177, 205);
  font-family: Helvetica, Arial, sans-serif;
  text-decoration: rgb(164, 177, 205);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(164, 177, 205);
  font-family: Helvetica, Arial, sans-serif;
  text-decoration: rgb(164, 177, 205);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(164, 177, 205);
  font-family: Helvetica, Arial, sans-serif;
  text-decoration: rgb(164, 177, 205);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
  color: rgb(164, 177, 205);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
  color: rgb(164, 177, 205);
}`,
    footer: `body footer {
  background-color: rgb(26, 35, 49);
  border-bottom-color: rgb(74, 84, 102);
  border-left-color: rgb(74, 84, 102);
  border-left-width: 2px;
  border-right-color: rgb(74, 84, 102);
  border-top-color: rgb(74, 84, 102);
  border-top-width: 2px;
  color: rgb(164, 177, 205);
  font-family: Helvetica, Arial, sans-serif;
}

body footer ul li a {
  color: rgb(164, 177, 205);
  text-decoration: rgb(164, 177, 205);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(164, 177, 205);
  font-family: Helvetica, Arial, sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
  color: rgb(164, 177, 205);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(164, 177, 205);
  text-decoration: rgb(164, 177, 205);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(164, 177, 205);
  font-family: Helvetica, Arial, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
}

body li.section-li > .section .meta {
  color: rgb(164, 177, 205);
  font-family: Helvetica, Arial, sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(164, 177, 205);
  text-decoration: rgb(164, 177, 205);
}

body ul.section-ul {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
  color: rgb(164, 177, 205);
}

body .darkmode svg {
  color: rgb(164, 177, 205);
  stroke: rgb(164, 177, 205);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
  color: rgb(164, 177, 205);
}

body .breadcrumb-element p {
  color: rgb(202, 210, 226);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
  color: rgb(164, 177, 205);
}

body .metadata {
  border-bottom-color: rgb(74, 84, 102);
  border-left-color: rgb(74, 84, 102);
  border-right-color: rgb(74, 84, 102);
  border-top-color: rgb(74, 84, 102);
  color: rgb(164, 177, 205);
}

body .metadata-properties {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
  color: rgb(164, 177, 205);
}

body .navigation-progress {
  background-color: rgb(26, 35, 49);
}

body .page-header h2.page-title {
  color: rgb(164, 177, 205);
}

body abbr {
  color: rgb(164, 177, 205);
  text-decoration: underline dotted rgb(164, 177, 205);
}

body details {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
}

body input[type=text] {
  border-bottom-color: rgb(202, 210, 226);
  border-left-color: rgb(202, 210, 226);
  border-right-color: rgb(202, 210, 226);
  border-top-color: rgb(202, 210, 226);
  color: rgb(202, 210, 226);
}

body kbd {
  background-color: rgb(26, 35, 49);
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
  color: rgb(164, 177, 205);
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

body progress {
  border-bottom-color: rgb(164, 177, 205);
  border-left-color: rgb(164, 177, 205);
  border-right-color: rgb(164, 177, 205);
  border-top-color: rgb(164, 177, 205);
}

body sub {
  color: rgb(164, 177, 205);
}

body summary {
  color: rgb(164, 177, 205);
}

body sup {
  color: rgb(164, 177, 205);
}`,
  },
  light: {},
};
