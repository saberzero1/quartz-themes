import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "poimandres", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 210;
  --accent-l: 50%;
  --accent-s: 40%;
  --background-modifier-active-hover: #1b1d23;
  --background-modifier-border: #25272e;
  --background-modifier-border-focus: #25272e;
  --background-modifier-border-hover: #25272e;
  --background-modifier-cover: #14161a;
  --background-modifier-error: #c06075;
  --background-modifier-error-hover: #d1889a;
  --background-modifier-form-field: #14161a;
  --background-modifier-form-field-highlighted: #14161a;
  --background-modifier-form-field-hover: #14161a;
  --background-modifier-hover: 40%;
  --background-modifier-message: #20232a;
  --background-modifier-success: #7bbfb0;
  --background-primary: #1b1d23;
  --background-primary-alt: #1b1d23;
  --background-secondary: #14161a;
  --background-secondary-alt: #14161a;
  --bases-cards-background: #1b1d23;
  --bases-cards-border-width: 2px;
  --bases-cards-cover-background: #1b1d23;
  --bases-cards-radius: 4px;
  --bases-cards-shadow: 0 0 0 1px #25272e;
  --bases-cards-shadow-hover: 0 0 0 1px #25272e;
  --bases-embed-border-color: #25272e;
  --bases-group-heading-property-color: #b8bfc9;
  --bases-header-border-width: 0 0 2px 0;
  --bases-table-border-color: #25272e;
  --bases-table-cell-background-active: #1b1d23;
  --bases-table-cell-background-disabled: #1b1d23;
  --bases-table-cell-background-selected: rgba(77, 128, 179, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #25272e;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(77, 128, 179);
  --bases-table-column-border-width: 2px;
  --bases-table-container-border-width: 2px;
  --bases-table-group-background: #1b1d23;
  --bases-table-header-background: #1b1d23;
  --bases-table-header-background-hover: 40%;
  --bases-table-header-color: #b8bfc9;
  --bases-table-row-background-hover: #14161a;
  --bases-table-row-border-width: 2px;
  --bases-table-summary-background: #1b1d23;
  --bases-table-summary-background-hover: 40%;
  --bg: #1b1d23;
  --bg_dark2: #14161a;
  --bg_highlight: #25272e;
  --bg_highlight_dark: #20232a;
  --blockquote-background-color: #14161a;
  --blockquote-border-color: rgb(77, 128, 179);
  --blue0: #c5d0e6;
  --blur-background: color-mix(in srgb, #14161a 65%, transparent) linear-gradient(#14161a, color-mix(in srgb, #14161a 65%, transparent));
  --bold-color: #84bfcf;
  --border-width: 2px;
  --button-radius: 4px;
  --callout-bug: #d1889a;
  --callout-default: #c5d0e6;
  --callout-error: #c06075;
  --callout-example: #d2a5c4;
  --callout-fail: #c06075;
  --callout-important: #7bbfb0;
  --callout-info: #c5d0e6;
  --callout-question: #dcb583;
  --callout-quote: #b8bfc9;
  --callout-success: #5db3be;
  --callout-summary: #84bfcf;
  --callout-tip: #84bfcf;
  --callout-todo: #84bfcf;
  --callout-warning: #f2a070;
  --canvas-background: #1b1d23;
  --canvas-card-label-color: #7da0b3;
  --caret-color: #e4e7ea;
  --checkbox-border-color: #7da0b3;
  --checkbox-border-color-hover: #7da0b3;
  --checkbox-color: #7da0b3;
  --checkbox-color-hover: #7da0b3;
  --checkbox-marker-color: #6f9fad;
  --checklist-done-color: #84bfcf;
  --code-background: #20232a;
  --code-border-color: #25272e;
  --code-bracket-background: 40%;
  --code-comment: #b8bfc9;
  --code-function: #84bfcf;
  --code-important: #c06075;
  --code-keyword: #6a998f;
  --code-normal: #e4e7ea;
  --code-operator: #6f9fad;
  --code-property: #e4e7ea;
  --code-punctuation: #6a998f;
  --code-string: #7bbfb0;
  --code-tag: #7bbfb0;
  --code-value: #7bbfb0;
  --collapse-icon-color: #7da0b3;
  --collapse-icon-color-collapsed: #d2a5c4;
  --color-accent: rgb(77, 128, 179);
  --color-accent-1: rgb(104, 152, 192);
  --color-accent-2: rgb(128, 172, 203);
  --color-accent-hsl: 210, 40%, 50%;
  --color_blue: #c5d0e6;
  --color_blue_rgb: #c5d0e6;
  --color_cyan: #84bfcf;
  --color_cyan_rgb: #84bfcf;
  --color_green: #7bbfb0;
  --color_green_rgb: #7bbfb0;
  --color_orange: #f2a070;
  --color_orange_rgb: #f2a070;
  --color_pink: #d2a5c4;
  --color_pink_rgb: #d2a5c4;
  --color_purple: #d2a5c4;
  --color_purple_rgb: #d2a5c4;
  --color_red: #d1889a;
  --color_red_rgb: #d1889a;
  --color_yellow: #dcb583;
  --color_yellow_rgb: #dcb583;
  --comment: #7da0b3;
  --cyan: #84bfcf;
  --cyan0: #6f9fad;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #25272e;
  --divider-color-hover: rgb(77, 128, 179);
  --dropdown-background: #14161a;
  --dropdown-background-hover: #1b1d23;
  --embed-background: #25272e;
  --embed-block-shadow-hover: 0 0 0 1px #25272e, inset 0 0 0 1px #25272e;
  --embed-border-start: 2px solid rgb(77, 128, 179);
  --embed-padding: 1.5rem 1.5rem 0.5rem;
  --fg: #e4e7ea;
  --fg_dark: #b8bfc9;
  --file-header-background: #1b1d23;
  --file-header-background-focused: #1b1d23;
  --file-header-border: 2px solid transparent;
  --flair-background: #14161a;
  --flair-color: #e4e7ea;
  --flashing-background: #14161a;
  --footnote-divider-color: #25272e;
  --footnote-divider-width: 2px;
  --footnote-id-color: #b8bfc9;
  --footnote-id-color-no-occurrences: #7da0b3;
  --footnote-input-background-active: 40%;
  --graph-line: #7da0b3;
  --graph-node: #e4e7ea;
  --graph-node-attachment: #c5d0e6;
  --graph-node-focused: #d2a5c4;
  --graph-node-tag: #f2a070;
  --graph-node-unresolved: #7da0b3;
  --graph-text: #e4e7ea;
  --gray: var(--text-muted);
  --green: #7bbfb0;
  --green0: #6a998f;
  --h1-color: #84bfcf;
  --h2-color: #6f9fad;
  --h3-color: #ffffff;
  --h4-color: #d2a5c4;
  --h5-color: #c5d0e6;
  --h6-color: #dcb583;
  --heading-formatting: #7da0b3;
  --highlight: var(--text-highlight-bg);
  --hr-color: #25272e;
  --icon-color: #b8bfc9;
  --icon-color-active: #7bbfb0;
  --icon-color-focused: #5db3be;
  --icon-color-hover: #c5d0e6;
  --indentation-guide-color: #7da0b3;
  --indentation-guide-color-active: #7da0b3;
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --inline-title-color: #84bfcf;
  --input-border-width: 2px;
  --input-date-separator: #7da0b3;
  --input-placeholder-color: #7da0b3;
  --input-radius: 4px;
  --interactive-accent: rgb(77, 128, 179);
  --interactive-accent-hover: #e4e7ea;
  --interactive-accent-hsl: 210, 40%, 50%;
  --interactive-hover: #1b1d23;
  --interactive-normal: #14161a;
  --interactive-success: #7bbfb0;
  --italic-color: #84bfcf;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #b8bfc9;
  --link-color-hover: #84bfcf;
  --link-external-color: #b8bfc9;
  --link-external-color-hover: #84bfcf;
  --link-unresolved-color: #d2a5c4;
  --link-unresolved-decoration-color: rgba(77, 128, 179, 0.3);
  --list-marker-color: #7da0b3;
  --list-marker-color-collapsed: #d2a5c4;
  --list-marker-color-hover: #b8bfc9;
  --magenta: #d2a5c4;
  --menu-background: #14161a;
  --menu-border-color: #25272e;
  --menu-border-width: 2px;
  --menu-radius: 4px;
  --mermaid-actor: #b8bfc9;
  --mermaid-loopline: #c5d0e6;
  --mermaid-note: #c5d0e6;
  --metadata-border-color: #25272e;
  --metadata-divider-color: #25272e;
  --metadata-input-background-active: 40%;
  --metadata-input-text-color: #e4e7ea;
  --metadata-label-background-active: 40%;
  --metadata-label-text-color: #b8bfc9;
  --metadata-label-text-color-hover: #b8bfc9;
  --metadata-property-background-active: 40%;
  --metadata-property-box-shadow-focus: 0 0 0 2px #25272e;
  --metadata-property-box-shadow-hover: 0 0 0 2px #25272e;
  --modal-background: #1b1d23;
  --modal-border-color: #25272e;
  --modal-border-width: 2px;
  --modal-radius: 4px;
  --nav-collapse-icon-color: #7da0b3;
  --nav-collapse-icon-color-collapsed: #7da0b3;
  --nav-file-tag: #dcb583;
  --nav-heading-color: #e4e7ea;
  --nav-heading-color-collapsed: #7da0b3;
  --nav-heading-color-collapsed-hover: #b8bfc9;
  --nav-heading-color-hover: #e4e7ea;
  --nav-indentation-guide-color: #25272e;
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: #25272e;
  --nav-item-background-hover: #25272e;
  --nav-item-background-selected: rgba(77, 128, 179, 0.15);
  --nav-item-color: #b8bfc9;
  --nav-item-color-active: #7bbfb0;
  --nav-item-color-highlighted: #d2a5c4;
  --nav-item-color-hover: #ffffff;
  --nav-item-color-selected: #e4e7ea;
  --nav-tag-color: #7da0b3;
  --nav-tag-color-active: #b8bfc9;
  --nav-tag-color-hover: #b8bfc9;
  --orange: #f2a070;
  --pdf-background: #1b1d23;
  --pdf-page-background: #1b1d23;
  --pdf-shadow: 0 0 0 1px #25272e;
  --pdf-sidebar-background: #1b1d23;
  --pdf-thumbnail-shadow: 0 0 0 1px #25272e;
  --pill-border-color: #25272e;
  --pill-border-color-hover: #25272e;
  --pill-border-width: 2px;
  --pill-color: #b8bfc9;
  --pill-color-hover: #e4e7ea;
  --pill-color-remove: #7da0b3;
  --pill-color-remove-hover: #d2a5c4;
  --prompt-background: #1b1d23;
  --prompt-border-color: #25272e;
  --prompt-border-width: 2px;
  --radius-l: 4px;
  --radius-m: 4px;
  --raised-background: color-mix(in srgb, #14161a 65%, transparent) linear-gradient(#14161a, color-mix(in srgb, #14161a 65%, transparent));
  --red: #d1889a;
  --red1: #c06075;
  --ribbon-background: #14161a;
  --ribbon-background-collapsed: #1b1d23;
  --scrollbar-active-thumb-bg: #14161a;
  --scrollbar-bg: #14161a;
  --scrollbar-radius: 4px;
  --scrollbar-thumb-bg: #14161a;
  --scrollbar-width: 8px;
  --search-clear-button-color: #b8bfc9;
  --search-icon-color: #b8bfc9;
  --search-result-background: #1b1d23;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #e4e7ea;
  --setting-items-background: #1b1d23;
  --setting-items-border-color: #25272e;
  --setting-items-radius: 4px;
  --slider-thumb-border-color: #25272e;
  --slider-thumb-border-width: 2px;
  --slider-thumb-radius: 4px;
  --slider-track-background: #25272e;
  --status-bar-background: #14161a;
  --status-bar-border-color: #25272e;
  --status-bar-border-width: 2px 0 0 2px;
  --status-bar-radius: 4px 0 0 0;
  --status-bar-text-color: #b8bfc9;
  --suggestion-background: #1b1d23;
  --tab-background-active: #1b1d23;
  --tab-container-background: #14161a;
  --tab-divider-color: #25272e;
  --tab-outline-color: #25272e;
  --tab-radius-active: 4px;
  --tab-switcher-background: #14161a;
  --tab-switcher-menubar-background: linear-gradient(to top, #14161a, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(77, 128, 179);
  --tab-text-color: #7da0b3;
  --tab-text-color-active: #b8bfc9;
  --tab-text-color-focused: #b8bfc9;
  --tab-text-color-focused-active: #7bbfb0;
  --tab-text-color-focused-active-current: #ffffff;
  --tab-text-color-focused-highlighted: #d2a5c4;
  --table-add-button-border-color: #25272e;
  --table-border-color: #25272e;
  --table-drag-handle-background-active: rgb(77, 128, 179);
  --table-drag-handle-color: #7da0b3;
  --table-drag-handle-color-active: #1b1d23;
  --table-header-background: #1b1d23;
  --table-header-background-hover: #14161a;
  --table-header-border-color: #25272e;
  --table-header-color: #e4e7ea;
  --table-row-alt-background: #14161a;
  --table-row-background-hover: #14161a;
  --table-selection: rgba(77, 128, 179, 0.1);
  --table-selection-border-color: rgb(77, 128, 179);
  --tag-background: #d2a5c4;
  --tag-background-hover: #84bfcf;
  --tag-border-color: rgba(77, 128, 179, 0.15);
  --tag-border-color-hover: rgba(77, 128, 179, 0.15);
  --tag-color: #d2a5c4;
  --tag-color-hover: #84bfcf;
  --teal: #5db3be;
  --tertiary: var(--text-accent-hover);
  --text-accent: #d2a5c4;
  --text-accent-hover: #84bfcf;
  --text-error: #d1889a;
  --text-error-hover: #e4e7ea;
  --text-faint: #7da0b3;
  --text-highlight-bg: #f2a070;
  --text-muted: #b8bfc9;
  --text-normal: #e4e7ea;
  --text-on-accent: #1b1d23;
  --text-selection: #20232a;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #14161a;
  --titlebar-background-focused: #14161a;
  --titlebar-border-color: #25272e;
  --titlebar-text-color: #b8bfc9;
  --titlebar-text-color-focused: #e4e7ea;
  --toggle-radius: 4px;
  --toggle-thumb-color: #1b1d23;
  --toggle-thumb-radius: 4px;
  --unknown: #ffffff;
  --vault-profile-color: #e4e7ea;
  --vault-profile-color-hover: #e4e7ea;
  --yellow: #dcb583;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(20, 22, 26);
  color: rgb(228, 231, 234);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(27, 29, 35);
  color: rgb(228, 231, 234);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(20, 22, 26);
  color: rgb(228, 231, 234);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(37, 39, 46);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(20, 22, 26);
  border-left-color: rgb(37, 39, 46);
  color: rgb(228, 231, 234);
}

body div#quartz-root {
  background-color: rgb(27, 29, 35);
  color: rgb(228, 231, 234);
}`,
    typography: `body .page article p > b, b {
  color: rgb(132, 191, 207);
  outline: rgb(132, 191, 207) none 0px;
  text-decoration: rgb(132, 191, 207);
  text-decoration-color: rgb(132, 191, 207);
}

body .page article p > em, em {
  color: rgb(132, 191, 207);
  outline: rgb(132, 191, 207) none 0px;
  text-decoration: rgb(132, 191, 207);
  text-decoration-color: rgb(132, 191, 207);
}

body .page article p > i, i {
  color: rgb(132, 191, 207);
  outline: rgb(132, 191, 207) none 0px;
  text-decoration: rgb(132, 191, 207);
  text-decoration-color: rgb(132, 191, 207);
}

body .page article p > strong, strong {
  color: rgb(132, 191, 207);
  outline: rgb(132, 191, 207) none 0px;
  text-decoration: rgb(132, 191, 207);
  text-decoration-color: rgb(132, 191, 207);
}

body .text-highlight {
  background-color: rgb(242, 160, 112);
  color: rgb(228, 231, 234);
  outline: rgb(228, 231, 234) none 0px;
  text-decoration: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

body del {
  color: rgb(228, 231, 234);
  outline: rgb(228, 231, 234) none 0px;
  text-decoration: line-through rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

body p {
  color: rgb(184, 191, 201);
  outline: rgb(184, 191, 201) none 0px;
  text-decoration: rgb(184, 191, 201);
  text-decoration-color: rgb(184, 191, 201);
}`,
    links: `body a.external, footer a {
  color: rgb(184, 191, 201);
  outline: rgb(184, 191, 201) none 0px;
  text-decoration: underline rgb(184, 191, 201);
  text-decoration-color: rgb(184, 191, 201);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(184, 191, 201);
  outline: rgb(184, 191, 201) none 0px;
  text-decoration: underline rgb(184, 191, 201);
  text-decoration-color: rgb(184, 191, 201);
}

body a.internal.broken {
  color: rgb(210, 165, 196);
  outline: rgb(210, 165, 196) none 0px;
  text-decoration: underline rgba(77, 128, 179, 0.3);
  text-decoration-color: rgba(77, 128, 179, 0.3);
}`,
    lists: `body dd {
  color: rgb(228, 231, 234);
}

body dt {
  color: rgb(228, 231, 234);
}

body ol > li {
  color: rgb(228, 231, 234);
}

body ol.overflow {
  background-color: rgb(27, 29, 35);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

body ul > li {
  color: rgb(228, 231, 234);
}

body ul.overflow {
  background-color: rgb(27, 29, 35);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(125, 160, 179);
  text-decoration: rgb(125, 160, 179);
}

body blockquote {
  background-color: rgb(20, 22, 26);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

body table {
  color: rgb(228, 231, 234);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(20, 22, 26);
}

body td {
  border-bottom-color: rgb(37, 39, 46);
  border-left-color: rgb(37, 39, 46);
  border-right-color: rgb(37, 39, 46);
  border-top-color: rgb(37, 39, 46);
  color: rgb(228, 231, 234);
}

body th {
  border-bottom-color: rgb(37, 39, 46);
  border-left-color: rgb(37, 39, 46);
  border-right-color: rgb(37, 39, 46);
  border-top-color: rgb(37, 39, 46);
  color: rgb(228, 231, 234);
}

body tr {
  background-color: rgb(27, 29, 35);
}`,
    code: `body code {
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
  color: rgb(228, 231, 234);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(32, 35, 42);
  border-bottom-color: rgb(37, 39, 46);
  border-left-color: rgb(37, 39, 46);
  border-right-color: rgb(37, 39, 46);
  border-top-color: rgb(37, 39, 46);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(32, 35, 42);
  border-bottom-color: rgb(37, 39, 46);
  border-left-color: rgb(37, 39, 46);
  border-right-color: rgb(37, 39, 46);
  border-top-color: rgb(37, 39, 46);
  color: rgb(228, 231, 234);
}

body pre > code > [data-line] {
  border-left-color: rgb(132, 191, 207);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(132, 191, 207);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(132, 191, 207);
  border-left-color: rgb(132, 191, 207);
  border-right-color: rgb(132, 191, 207);
  border-top-color: rgb(132, 191, 207);
}

body pre > code, pre:has(> code) {
  background-color: rgb(32, 35, 42);
  border-bottom-color: rgb(37, 39, 46);
  border-left-color: rgb(37, 39, 46);
  border-right-color: rgb(37, 39, 46);
  border-top-color: rgb(37, 39, 46);
}

body pre:has(> code) {
  background-color: rgb(32, 35, 42);
  border-bottom-color: rgb(37, 39, 46);
  border-left-color: rgb(37, 39, 46);
  border-right-color: rgb(37, 39, 46);
  border-top-color: rgb(37, 39, 46);
}`,
    images: `body audio {
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

body figcaption {
  color: rgb(228, 231, 234);
}

body figure {
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

body img {
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

body video {
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}`,
    embeds: `body .file-embed {
  background-color: rgb(27, 29, 35);
  border-bottom-color: rgb(184, 191, 201);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(184, 191, 201);
  border-right-color: rgb(184, 191, 201);
  border-top-color: rgb(184, 191, 201);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body .footnotes {
  border-top-color: rgb(228, 231, 234);
  color: rgb(228, 231, 234);
}

body .transclude {
  background-color: rgb(37, 39, 46);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(77, 128, 179);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

body .transclude-inner {
  background-color: rgb(37, 39, 46);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(77, 128, 179);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(132, 191, 207);
  text-decoration: line-through rgb(132, 191, 207);
  text-decoration-color: rgb(132, 191, 207);
}

body input[type=checkbox] {
  border-bottom-color: rgb(125, 160, 179);
  border-left-color: rgb(125, 160, 179);
  border-right-color: rgb(125, 160, 179);
  border-top-color: rgb(125, 160, 179);
}

body li.task-list-item[data-task='!'] {
  color: rgb(228, 231, 234);
  text-decoration: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

body li.task-list-item[data-task='*'] {
  color: rgb(228, 231, 234);
  text-decoration: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

body li.task-list-item[data-task='-'] {
  color: rgb(228, 231, 234);
  text-decoration: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

body li.task-list-item[data-task='/'] {
  color: rgb(228, 231, 234);
  text-decoration: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

body li.task-list-item[data-task='>'] {
  color: rgb(228, 231, 234);
  text-decoration: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

body li.task-list-item[data-task='?'] {
  color: rgb(228, 231, 234);
  text-decoration: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

body li.task-list-item[data-task='I'] {
  color: rgb(228, 231, 234);
  text-decoration: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

body li.task-list-item[data-task='S'] {
  color: rgb(228, 231, 234);
  text-decoration: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

body li.task-list-item[data-task='b'] {
  color: rgb(228, 231, 234);
  text-decoration: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

body li.task-list-item[data-task='c'] {
  color: rgb(228, 231, 234);
  text-decoration: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

body li.task-list-item[data-task='d'] {
  color: rgb(228, 231, 234);
  text-decoration: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

body li.task-list-item[data-task='f'] {
  color: rgb(228, 231, 234);
  text-decoration: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

body li.task-list-item[data-task='i'] {
  color: rgb(228, 231, 234);
  text-decoration: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

body li.task-list-item[data-task='k'] {
  color: rgb(228, 231, 234);
  text-decoration: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

body li.task-list-item[data-task='l'] {
  color: rgb(228, 231, 234);
  text-decoration: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

body li.task-list-item[data-task='p'] {
  color: rgb(228, 231, 234);
  text-decoration: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

body li.task-list-item[data-task='u'] {
  color: rgb(228, 231, 234);
  text-decoration: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

body li.task-list-item[data-task='w'] {
  color: rgb(228, 231, 234);
  text-decoration: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

body .callout[data-callout="abstract"] {
  --callout-color: #84bfcf;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

body .callout[data-callout="bug"] {
  --callout-color: #d1889a;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

body .callout[data-callout="danger"] {
  --callout-color: #c06075;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

body .callout[data-callout="example"] {
  --callout-color: #d2a5c4;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

body .callout[data-callout="failure"] {
  --callout-color: #c06075;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

body .callout[data-callout="info"] {
  --callout-color: #c5d0e6;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

body .callout[data-callout="note"] {
  --callout-color: #c5d0e6;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

body .callout[data-callout="question"] {
  --callout-color: #dcb583;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

body .callout[data-callout="quote"] {
  --callout-color: #b8bfc9;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

body .callout[data-callout="success"] {
  --callout-color: #5db3be;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

body .callout[data-callout="tip"] {
  --callout-color: #84bfcf;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

body .callout[data-callout="todo"] {
  --callout-color: #84bfcf;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

body .callout[data-callout="warning"] {
  --callout-color: #f2a070;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}`,
    search: `body .search > .search-button {
  background-color: rgb(20, 22, 26);
  border-bottom-color: rgb(37, 39, 46);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 2px;
  border-left-color: rgb(37, 39, 46);
  border-left-width: 2px;
  border-right-color: rgb(37, 39, 46);
  border-right-width: 2px;
  border-top-color: rgb(37, 39, 46);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 2px;
  color: rgb(228, 231, 234);
}

body .search > .search-container > .search-space {
  background-color: rgb(27, 29, 35);
  border-bottom-color: rgb(37, 39, 46);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 2px;
  border-left-color: rgb(37, 39, 46);
  border-left-width: 2px;
  border-right-color: rgb(37, 39, 46);
  border-right-width: 2px;
  border-top-color: rgb(37, 39, 46);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 2px;
}

body .search > .search-container > .search-space > * {
  color: rgb(228, 231, 234);
  outline: rgb(228, 231, 234) none 0px;
  text-decoration: rgb(228, 231, 234);
  text-decoration-color: rgb(228, 231, 234);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(228, 231, 234);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(228, 231, 234);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(228, 231, 234);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(37, 39, 46);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 2px;
  border-left-color: rgb(37, 39, 46);
  border-left-width: 2px;
  border-right-color: rgb(37, 39, 46);
  border-right-width: 2px;
  border-top-color: rgb(37, 39, 46);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 2px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(20, 22, 26);
  border-bottom-width: 2px;
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
  color: rgb(228, 231, 234);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(228, 231, 234);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(210, 165, 196);
  border-bottom-color: rgba(77, 128, 179, 0.15);
  border-left-color: rgba(77, 128, 179, 0.15);
  border-right-color: rgba(77, 128, 179, 0.15);
  border-top-color: rgba(77, 128, 179, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(210, 165, 196);
}

body h1 {
  color: rgb(132, 191, 207);
}

body h2 {
  color: rgb(111, 159, 173);
}

body h2.page-title, h2.page-title a {
  color: rgb(132, 191, 207);
}

body h3 {
  color: rgb(255, 255, 255);
}

body h4 {
  color: rgb(210, 165, 196);
}

body h5 {
  color: rgb(197, 208, 230);
}

body h6 {
  color: rgb(220, 181, 131);
}

body hr {
  border-bottom-color: rgb(37, 39, 46);
  border-left-color: rgb(37, 39, 46);
  border-right-color: rgb(37, 39, 46);
}`,
    scrollbars: `body .callout {
  --callout-color: #c5d0e6;
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

body ::-webkit-scrollbar {
  background: rgb(27, 29, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 29, 35);
}

body ::-webkit-scrollbar-corner {
  background: rgb(27, 29, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 29, 35);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(27, 29, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 29, 35);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(27, 29, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 29, 35);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(27, 29, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 29, 35);
}

body ::-webkit-scrollbar-track {
  background: rgb(27, 29, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 29, 35);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(184, 191, 201);
  text-decoration: rgb(184, 191, 201);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(184, 191, 201);
  text-decoration: rgb(184, 191, 201);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(184, 191, 201);
  text-decoration: rgb(184, 191, 201);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(37, 39, 46);
  border-bottom-color: rgb(123, 191, 176);
  border-left-color: rgb(123, 191, 176);
  border-right-color: rgb(123, 191, 176);
  border-top-color: rgb(123, 191, 176);
  color: rgb(123, 191, 176);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(184, 191, 201);
  border-left-color: rgb(184, 191, 201);
  border-right-color: rgb(184, 191, 201);
  border-top-color: rgb(184, 191, 201);
  color: rgb(184, 191, 201);
}`,
    footer: `body footer {
  background-color: rgb(20, 22, 26);
  border-bottom-color: rgb(37, 39, 46);
  border-left-color: rgb(37, 39, 46);
  border-left-width: 2px;
  border-right-color: rgb(37, 39, 46);
  border-top-color: rgb(37, 39, 46);
  border-top-left-radius: 0px;
  border-top-width: 2px;
  color: rgb(184, 191, 201);
}

body footer ul li a {
  color: rgb(184, 191, 201);
  text-decoration: rgb(184, 191, 201);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(228, 231, 234);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
  color: rgb(228, 231, 234);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(184, 191, 201);
  text-decoration: rgb(184, 191, 201);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(184, 191, 201);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

body li.section-li > .section .meta {
  color: rgb(184, 191, 201);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(184, 191, 201);
  text-decoration: rgb(184, 191, 201);
}

body ul.section-ul {
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(184, 191, 201);
  border-left-color: rgb(184, 191, 201);
  border-right-color: rgb(184, 191, 201);
  border-top-color: rgb(184, 191, 201);
  color: rgb(184, 191, 201);
}

body .darkmode svg {
  color: rgb(184, 191, 201);
  stroke: rgb(184, 191, 201);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(184, 191, 201);
  border-left-color: rgb(184, 191, 201);
  border-right-color: rgb(184, 191, 201);
  border-top-color: rgb(184, 191, 201);
  color: rgb(184, 191, 201);
}

body .breadcrumb-element p {
  color: rgb(125, 160, 179);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
  color: rgb(228, 231, 234);
}

body .metadata {
  border-bottom-color: rgb(37, 39, 46);
  border-left-color: rgb(37, 39, 46);
  border-right-color: rgb(37, 39, 46);
  border-top-color: rgb(37, 39, 46);
  color: rgb(184, 191, 201);
}

body .metadata-properties {
  border-bottom-color: rgb(184, 191, 201);
  border-left-color: rgb(184, 191, 201);
  border-right-color: rgb(184, 191, 201);
  border-top-color: rgb(184, 191, 201);
  color: rgb(184, 191, 201);
}

body .navigation-progress {
  background-color: rgb(20, 22, 26);
}

body .page-header h2.page-title {
  color: rgb(228, 231, 234);
}

body abbr {
  color: rgb(228, 231, 234);
  text-decoration: underline dotted rgb(228, 231, 234);
}

body details {
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

body input[type=text] {
  border-bottom-color: rgb(184, 191, 201);
  border-left-color: rgb(184, 191, 201);
  border-right-color: rgb(184, 191, 201);
  border-top-color: rgb(184, 191, 201);
  color: rgb(184, 191, 201);
}

body kbd {
  background-color: rgb(32, 35, 42);
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
  color: rgb(228, 231, 234);
}

body progress {
  border-bottom-color: rgb(228, 231, 234);
  border-left-color: rgb(228, 231, 234);
  border-right-color: rgb(228, 231, 234);
  border-top-color: rgb(228, 231, 234);
}

body sub {
  color: rgb(228, 231, 234);
}

body summary {
  color: rgb(228, 231, 234);
}

body sup {
  color: rgb(228, 231, 234);
}`,
  },
  light: {},
};
